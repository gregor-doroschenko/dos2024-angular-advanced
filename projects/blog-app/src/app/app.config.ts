import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { StrangerThingsEffects } from './store/strangerthings.effects';
import { strangerThingsReducer } from './store/strangerthings.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(), 
    provideEffects([StrangerThingsEffects]), 
    provideStore(),
    provideState({name: 'characters', reducer: strangerThingsReducer})
  ]
};
