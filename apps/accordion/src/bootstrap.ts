import { bootstrapApplication } from '@angular/platform-browser';
import { AccordionComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AccordionComponent, appConfig).catch((err) =>
  console.error(err)
);
