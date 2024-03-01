import { bootstrapApplication } from '@angular/platform-browser';
import { AgeCalculatorComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AgeCalculatorComponent, appConfig).catch((err) =>
  console.error(err)
);
