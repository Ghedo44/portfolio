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
  private sectionStack = signal<Section[]>([]);

  // Selectors
  readonly currentSection = computed(() => this.state().currentSection);

  // Actions
  setCurrentSection$ = new Subject<Section>();
  removeSection$ = new Subject<Section>();

  constructor() {
    this.removeSection$.subscribe((section) => {
      // this.sectionStack.update((state) => state.filter((s) => s !== section));
      this.state.update((state) => ({
        ...state, currentSection: undefined
      }));
    });

    this.setCurrentSection$.subscribe((section) => {
      // if (this.sectionStack()[this.sectionStack().length - 1] === section) return;
      // this.sectionStack.update((state) => {
      //   return [...state, section];
      // });
      this.state.update((state) => ({
        ...state, currentSection: section
      }));
    });

    // effect(() => {
    //   const sections = this.sectionStack();
    //   console.log(sections);
    //   this.state.update((state) => ({
    //     ...state, currentSection: sections[sections.length - 1]
    //   }));
    // }, {allowSignalWrites: true});
  }
}
