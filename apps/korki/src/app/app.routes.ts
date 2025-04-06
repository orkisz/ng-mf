import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m!.remoteRoutes),
  },
];
