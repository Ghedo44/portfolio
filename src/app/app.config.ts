import { afterNextRender, ApplicationConfig, Inject, inject, Injectable, InjectionToken, Injector, Optional, PLATFORM_ID } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CustomProvider, initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// import type { app } from 'firebase-admin';
// export const FIREBASE_ADMIN = new InjectionToken<app.App>('firebase-admin');

@Injectable({
  providedIn: 'root'
})
export class RecaptchaBrowser {

  constructor(
      @Inject(PLATFORM_ID) private platformId: string
  ) { }

  provider(siteKey: string) {
      return isPlatformBrowser(this.platformId)
          ? new ReCaptchaV3Provider(siteKey)
          : new CustomProvider({
              getToken: () => new Promise(() => { })
          })
  }
}

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
    // ...a
    
    // provideAppCheck(() => {
    //   // const platformId = inject(PLATFORM_ID);
    //   // if (isPlatformServer(platformId)) {
    //   //   return;
    //   // }
    //     const provider = new ReCaptchaV3Provider('6LcO2AwqAAAAAIQN58P9rFxf-Zl1BG90pw92KA33');
    //     return initializeAppCheck(getApp(), { provider, isTokenAutoRefreshEnabled: true });

      
    // }),


    // provideAppCheck((injector) =>  {
    //   const admin = injector.get<app.App|null>(FIREBASE_ADMIN, null);
    //   if (admin) {
    //     const provider = new CustomProvider({ getToken: () =>
    //       admin.
    //       appCheck().
    //       createToken(environment.firebaseConfig.appId, { ttlMillis: 604_800_000, /* 1 week */ }).
    //       then(({ token, ttlMillis: expireTimeMillis }: { token: string, ttlMillis: number }) => ({ token, expireTimeMillis } ))
    //     });
    //     return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: false });
    //   } else {
    //     const provider = new ReCaptchaV3Provider(environment.recaptcha3SiteKey);
    //     return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    //   }
    // }, [new Optional(), FIREBASE_ADMIN]),

    provideAppCheck((injector) => initializeAppCheck(getApp(), {
      provider: injector.get(RecaptchaBrowser).provider(environment.recaptcha3SiteKey),
      isTokenAutoRefreshEnabled: true
    })),

  ]
};
