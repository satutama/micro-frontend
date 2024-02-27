import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'accordion',
    title: 'Accordion',
    loadChildren: () => import('accordion/Routes').then((m) => m.appRoutes),
  },
  {
    path: 'qr-code',
    title: 'QR code',
    loadChildren: () => import('qr-scanner/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
