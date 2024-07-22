import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Homebannerreducer } from './store/home.reducer';
import { Apidatareducer } from './store/apidata.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideStore(
      {hero:Homebannerreducer,
      products:Apidatareducer}
      ), 
    provideEffects(),
 provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
