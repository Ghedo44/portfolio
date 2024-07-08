import { computed, effect, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

interface ViewManagerState {
  currentSection?: string;
}

export enum Section {
  Hero = 'hero',
  About = 'about',
  Projects = 'projects',
  Skills = 'skills',
  Carreer = 'carreer',
  Contact = 'contact'
}

@Injectable({
  providedIn: 'root'
})
export class ViewManagerService {

  // State
  private readonly state = signal<ViewManagerState>({});

  // Selectors
  readonly currentSection = computed(() => this.state().currentSection);

  // Actions
  setCurrentSection$ = new Subject<Section>();
  removeSection$ = new Subject<void>();

  constructor() {
    this.removeSection$.subscribe(() => {
      this.state.update((state) => ({
        ...state, currentSection: undefined
      }));
    });

    this.setCurrentSection$.subscribe((section) => {
      this.state.update((state) => ({
        ...state, currentSection: section
      }));
    });
  }
}
