import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  providers:[
    provideHttpClient(),
    provideZonelessChangeDetection()
  ]
})
  .catch((err) => console.error(err));
