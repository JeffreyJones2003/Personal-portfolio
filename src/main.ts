import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(NgbModule)
  ]
})
  .then(() => {
    AOS.init();
  })
  .catch((err) => console.error(err));