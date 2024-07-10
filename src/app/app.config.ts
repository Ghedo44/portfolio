import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, 
      withInMemoryScrolling({
        anchorScrolling: 'enabled', 
        scrollPositionRestoration: 'enabled'
      }),
    ), 
    provideClientHydration(), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ghedo-portfolio","appId":"1:1019464200355:web:6a9ab87091071cfb15cf16","storageBucket":"ghedo-portfolio.appspot.com","apiKey":"AIzaSyAA_9ynYVWJu9_evgFZOuTPDepjDQjyIkM","authDomain":"ghedo-portfolio.firebaseapp.com","messagingSenderId":"1019464200355"})), provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider('6LcO2AwqAAAAAIQN58P9rFxf-Zl1BG90pw92KA33');
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
  ]
};
