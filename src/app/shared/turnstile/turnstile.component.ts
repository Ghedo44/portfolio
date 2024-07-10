import {
  Component,
  AfterViewInit,
  ElementRef,
  NgZone,
  OnDestroy,
  ChangeDetectionStrategy,
  inject, 
  input, 
  output, 
  signal
} from '@angular/core';
import { TurnstileOptions } from './turnstile.interfaces';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../window.injection-token';

declare global {
  interface Window {
    onloadTurnstileCallback: () => void;
    turnstile: {
      render: (
        idOrContainer: string | HTMLElement,
        options: TurnstileOptions,
      ) => string;
      reset: (widgetIdOrContainer: string | HTMLElement) => void;
      getResponse: (
        widgetIdOrContainer: string | HTMLElement,
      ) => string | undefined;
      remove: (widgetIdOrContainer: string | HTMLElement) => void;
    };
  }
}

const CALLBACK_NAME = 'onloadTurnstileCallback';
type SupportedVersion = '0';
@Component({
  selector: 'turnstile',
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TurnstileComponent implements AfterViewInit, OnDestroy {
  // Inputs
  siteKey = input.required<string>();
  action = input<string>();
  cData = input<string>();
  theme = input<'light' | 'dark' | 'auto'>('auto');
  version = input<SupportedVersion>('0');
  tabIndex = input<number>();
  appearance = input<'always' | 'execute' | 'interaction-only'>('always');

  // Outputs
  resolved = output<string | null>();
  errored = output<string | null>();

  // Private
  private widgetId = signal('');

  // Injected
  private document = inject(DOCUMENT);
  private window = inject(WINDOW);
  private elementRef = inject(ElementRef);
  private zone = inject(NgZone);


  private _getCloudflareTurnstileUrl(): string {
    if (this.version() === '0') {
      return 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    }
    throw 'Version not defined in ngx-turnstile component.';
  }

  public ngAfterViewInit(): void {
    let turnstileOptions: TurnstileOptions = {
      sitekey: this.siteKey(),
      theme: this.theme(),
      tabindex: this.tabIndex(),
      action: this.action(),
      cData: this.cData(),
      appearance: this.appearance(),
      callback: (token: string) => {
        this.zone.run(() => this.resolved.emit(token));
      },
      'error-callback': (errorCode: string): boolean => {
        this.zone.run(() => this.errored.emit(errorCode));
        // Returning false causes Turnstile to log error code as a console warning.
        return false;
      },
      'expired-callback': () => {
        this.zone.run(() => this.reset());
      },
    };

    const script = this.document.createElement('script');

    this.window[CALLBACK_NAME] = () => {
      if (!this.elementRef?.nativeElement) {
        return;
      }

      this.widgetId.set(this.window.turnstile.render(
        this.elementRef.nativeElement,
        turnstileOptions,
      ));
    };

    script.src = `${this._getCloudflareTurnstileUrl()}?render=explicit&onload=${CALLBACK_NAME}`;
    script.async = true;
    script.defer = true;
    this.document.head.appendChild(script);
  }

  public reset(): void {
    if (this.widgetId()) {
      this.resolved.emit(null);
      this.window.turnstile.reset(this.widgetId());
    }
  }

  public ngOnDestroy(): void {
    if (this.widgetId()) {
      this.window.turnstile.remove(this.widgetId());
    }
  }
}
