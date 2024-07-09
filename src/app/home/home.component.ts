import { Component, ElementRef, HostListener, inject, OnDestroy, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewManagerService, Section } from '../shared/data-access/view-manager.service';
import { SeoService } from '../shared/data-access/seo.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  vms = inject(ViewManagerService);
  ss = inject(SeoService);

  // Sections
  sections = viewChildren<ElementRef>('section');

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
}
