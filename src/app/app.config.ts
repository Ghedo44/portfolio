import { afterNextRender, ApplicationConfig, inject, Injector, PLATFORM_ID } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
import { isPlatformServer } from '@angular/common';

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
    // provideAppCheck(() => {
    //   // const platformId = inject(PLATFORM_ID);
    //   // if (isPlatformServer(platformId)) {
    //   //   return;
    //   // }
    //     const provider = new ReCaptchaV3Provider('6LcO2AwqAAAAAIQN58P9rFxf-Zl1BG90pw92KA33');
    //     return initializeAppCheck(getApp(), { provider, isTokenAutoRefreshEnabled: true });

      
    // }),
  ]
};
