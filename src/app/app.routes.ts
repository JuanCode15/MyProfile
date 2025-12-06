import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', loadComponent: () => import('./principal/principal').then(m => m.Principal) },
  { path: 'menu', loadComponent: () => import('./shared/menu/menu').then(m => m.Menu) },
  { path: 'footer', loadComponent: () => import('./shared/footer/footer').then(m => m.Footer) },
  { path: 'header', loadComponent: () => import('./shared/header/header').then(m => m.Header) },
   { path: 'Caru', loadComponent: () => import('./carusel/carusel').then(m => m.Carusel) },
];
