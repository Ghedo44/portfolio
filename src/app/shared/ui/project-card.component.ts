import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <div [routerLink]="projectLink()" class="h-full bg-white card shadow-md hover:scale-95 transition-all duration-300 group">
      <figure>
          <img [ngSrc]="imageUrl()" width="1792" height="1024"
              alt="Project 1" class="rotate-2 scale-105 group-hover:rotate-0 group-hover:scale-100 transition-all duration-300">
      </figure>
      <div class="card-body">
          <h3 class="text-2xl font-bold text-gray-800">
            <ng-content select="[title]"></ng-content>
          </h3>
          <div class="mt-4 text-gray-600">
            <ng-content></ng-content>
          </div>
      </div>
  </div>
  `,
  styles: ``
})
export class ProjectCardComponent {
  projectLink = input.required<string>();
  imageUrl = input.required<string>();
}
