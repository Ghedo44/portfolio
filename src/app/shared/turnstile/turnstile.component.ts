import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window(); // does this work?
  }
});



import {
  Component,
  AfterViewInit,
  ElementRef,
  Input,
  NgZone,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { TurnstileOptions } from './turnstile.interfaces';
import { DOCUMENT } from '@angular/common';

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
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TurnstileComponent implements AfterViewInit, OnDestroy {
  @Input() siteKey!: string;
  @Input() action?: string;
  @Input() cData?: string;
  @Input() theme?: 'light' | 'dark' | 'auto' = 'auto';
  @Input() version: SupportedVersion = '0';
  @Input() tabIndex?: number;
  @Input() appearance?: 'always' | 'execute' | 'interaction-only' = 'always';

  @Output() resolved = new EventEmitter<string | null>();
  @Output() errored = new EventEmitter<string | null>();

  private widgetId!: string;

  private document = inject(DOCUMENT);
  private window = inject(WINDOW);

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private zone: NgZone,
  ) {}

  private _getCloudflareTurnstileUrl(): string {
    if (this.version === '0') {
      return 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    }

    throw 'Version not defined in ngx-turnstile component.';
  }

  public ngAfterViewInit(): void {
    let turnstileOptions: TurnstileOptions = {
      sitekey: this.siteKey,
      theme: this.theme,
      tabindex: this.tabIndex,
      action: this.action,
      cData: this.cData,
      appearance: this.appearance,
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

      this.widgetId = this.window.turnstile.render(
        this.elementRef.nativeElement,
        turnstileOptions,
      );
    };

    script.src = `${this._getCloudflareTurnstileUrl()}?render=explicit&onload=${CALLBACK_NAME}`;
    script.async = true;
    script.defer = true;
    this.document.head.appendChild(script);
  }

  public reset(): void {
    if (this.widgetId) {
      this.resolved.emit(null);
      this.window.turnstile.reset(this.widgetId);
    }
  }

  public ngOnDestroy(): void {
    if (this.widgetId) {
      this.window.turnstile.remove(this.widgetId);
    }
  }
}
