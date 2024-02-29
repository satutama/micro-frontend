import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'result-summary',
    loadChildren: () =>
      import('result-summary/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'qr-code',
    title: 'QR code',
    loadChildren: () => import('qr-scanner/Routes').then((m) => m.appRoutes),
  },
  {
    path: 'accordion',
    title: 'Accordion',
    loadChildren: () => import('accordion/Routes').then((m) => m.appRoutes),
  },
  {
    path: 'result-summary',
    title: 'Result Summary',
    loadChildren: () =>
      import('result-summary/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
