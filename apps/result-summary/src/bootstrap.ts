import { bootstrapApplication } from '@angular/platform-browser';
import { ResultSummaryComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(ResultSummaryComponent, appConfig).catch((err) =>
  console.error(err)
);
