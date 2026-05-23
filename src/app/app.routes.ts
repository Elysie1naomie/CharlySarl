import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'realisations',
    loadComponent: () => import('./features/realisations/realisations').then(m => m.RealisationsComponent),
  },
  {
    path: 'atelier',
    loadComponent: () => import('./features/atelier/atelier').then(m => m.AtelierComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services').then(m => m.ServicesComponent),
  },
  {
    path: 'galerie',
    loadComponent: () => import('./features/galerie/galerie').then(m => m.GalerieComponent),
  },
  {
    path: 'temoignages',
    loadComponent: () => import('./features/temoignages/temoignages').then(m => m.TemoignagesComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
