import { Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewManagerService, Section } from '../data-access/view-manager.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  // host: {
  //   class: 'block h-16'
  // },
  template: `
    <div class="h-16">
      <header #header class="h-16 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/65 transition-shadow">
        <div class="container mx-auto flex justify-between items-center h-full px-6">
            <a routerLink="/" class="font-bold text-xl text-gray-800">Federico Ghedini</a>
            <nav class="space-x-4">
                <a routerLink="/" fragment="about" [ngClass]="vms.currentSection() === section.About ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">About</a>
                <a routerLink="/" fragment="projects" [ngClass]="vms.currentSection() === section.Projects ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Projects</a>
                <a routerLink="/" fragment="skills" [ngClass]="vms.currentSection() === section.Skills ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Skills</a>
                <a routerLink="/" fragment="carreer" [ngClass]="vms.currentSection() === section.Carreer ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Carreer</a>
                <a routerLink="/" fragment="contact" [ngClass]="vms.currentSection() === section.Contact ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Contact</a>
            </nav>
        </div>
      </header>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  vms = inject(ViewManagerService);

  section = Section;

  header = viewChild.required<ElementRef>('header');

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if (window.scrollY > 5) {
      this.header().nativeElement.classList.add('shadow');
    } else {
      this.header().nativeElement.classList.remove('shadow');
    }
  }
}
