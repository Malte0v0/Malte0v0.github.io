import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'yyyy-MM-dd' } },
  ],
};
