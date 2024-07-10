import { ApplicationConfig, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CustomProvider, initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
import { isPlatformBrowser } from '@angular/common';

declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
}
self.FIREBASE_APPCHECK_DEBUG_TOKEN = environment.appCheckDebug;


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
    provideFirestore(() => getFirestore()),
    provideAppCheck((injector) => initializeAppCheck(getApp(), {
      provider: injector.get(RecaptchaBrowser).provider(environment.recaptcha3SiteKey),
      isTokenAutoRefreshEnabled: true
    })),

  ]
};


@Injectable({
  providedIn: 'root'
})
export class RecaptchaBrowser {
  platformId = inject(PLATFORM_ID);
  
  provider(siteKey: string) {
      return isPlatformBrowser(this.platformId)
          ? new ReCaptchaV3Provider(siteKey)
          : new CustomProvider({
              getToken: () => new Promise(() => { })
          })
  }
}