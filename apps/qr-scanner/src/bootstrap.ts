import { bootstrapApplication } from '@angular/platform-browser';
import { QrCodeComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(QrCodeComponent, appConfig).catch((err) =>
  console.error(err)
);
