import { Directive, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TurnstileComponent } from './turnstile.component';
import { outputToObservable } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[turnstile[formControl], turnstile[formControlName], turnstile[ngModel]]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TurnstileValueAccessorDirective),
      multi: true,
    },
  ],
})
export class TurnstileValueAccessorDirective implements ControlValueAccessor, OnInit {

  private onChange!: (value: string | null) => void;
  private onTouched!: () => void;
  private resolved: boolean = false;

  constructor(private turnstileComp: TurnstileComponent) {}

  ngOnInit(): void {
    outputToObservable(this.turnstileComp.resolved).subscribe((token: string | null) => {
      this.resolved = !!token;

      if (this.onChange) {
        this.onChange(token);
      }

      if (this.onTouched) {
        this.onTouched();
      }
    });
  }

  // Prevent form control from setting token value
  writeValue(value: any): void {
    // reset turnstile component if form control sets the value after already receiving a valid token
    if (this.resolved) {
      this.resolved = false;
      this.turnstileComp.reset();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
