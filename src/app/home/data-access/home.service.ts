import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Subject, switchMap, tap } from 'rxjs';

interface HomeState {
  contactFormStatus: 'idle' | 'loading' | 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private firestore = inject(Firestore);

  private state = signal<HomeState>({contactFormStatus: 'idle'});

  contactFormStatus = computed(() => this.state().contactFormStatus);

  sendContactForm$ = new Subject<{ name: string, email: string, message: string }>();

  private contactForm$ = this.sendContactForm$.pipe(
    tap(() => this.state.update((state) => ({...state, contactFormStatus: 'loading'}))),
    switchMap(({ name, email, message }) => {
      return addDoc(collection(this.firestore, 'contact-form'),{
        name,
        email,
        message,
      });
    })
  )

  constructor() {
    this.contactForm$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.state.update((state) => ({...state, contactFormStatus: 'success'}));
    });
  }
}
