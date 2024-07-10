import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, OnDestroy, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewManagerService, Section } from '../shared/data-access/view-manager.service';
import { SeoService } from '../shared/data-access/seo.service';
import { NgOptimizedImage } from '@angular/common';
import { TurnstileComponent } from '../shared/turnstile/turnstile.component';
import { TurnstileValueAccessorDirective } from '../shared/turnstile/turnstile-value-accessor.directive';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HomeService } from './data-access/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, TurnstileComponent, TurnstileValueAccessorDirective, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnDestroy {
  private vms = inject(ViewManagerService);
  private ss = inject(SeoService);
  hs = inject(HomeService);

  siteKey = environment.turnstileSiteKey;

  // Sections
  sections = viewChildren<ElementRef>('section');

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
    tokenControl: new FormControl(null, [Validators.required])
  });

  constructor() {
    this.ss.generateTags({});
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {
    const section = this.sections().find((section) => {
      const rect = section.nativeElement.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.3 && rect.top > 0;
    });

    if (section) {
      this.vms.setCurrentSection$.next(section.nativeElement.id as Section);
    }
  }

  ngOnDestroy() {
    this.vms.removeSection$.next();
  }

  onSubmit() {
    this.hs.sendContactForm$.next({
      name: this.form.get('name')!.value!,
      email: this.form.get('email')!.value!,
      message: this.form.get('message')!.value!
    });
  }
}
