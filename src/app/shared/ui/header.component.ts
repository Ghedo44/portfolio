import { Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewManagerService, Section } from '../data-access/view-manager.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <div class="h-16">
      <header #header class="h-16 md:fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/85 transition-shadow">
        <div class="container mx-auto flex items-center h-full px-6">
            <a routerLink="/" class="font-bold text-xl text-gray-800">Federico Ghedini</a>
            <div class="flex-1"></div>
            <nav class="space-x-4 hidden md:block">
                <a routerLink="/" fragment="about" [ngClass]="vms.currentSection() === section.About ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">About</a>
                <a routerLink="/" fragment="projects" [ngClass]="vms.currentSection() === section.Projects ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Projects</a>
                <a routerLink="/" fragment="skills" [ngClass]="vms.currentSection() === section.Skills ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Skills</a>
                <a routerLink="/" fragment="carreer" [ngClass]="vms.currentSection() === section.Carreer ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Carreer</a>
                <a routerLink="/" fragment="contact" [ngClass]="vms.currentSection() === section.Contact ? 'text-blue-700' : 'text-gray-600'" class="hover:text-blue-500 font-semibold transition-all">Contact</a>
            </nav>
            <div class="ml-8 flex gap-4 text-gray-500">
              <a href="https://github.com/ghedo44" target="_blank" class="hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/federico-ghedini/" target="_blank" class="hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
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
      this.header().nativeElement.classList.add('md:shadow');
    } else {
      this.header().nativeElement.classList.remove('md:shadow');
    }
  }
}
