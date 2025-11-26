import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes')
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.routes')
  }
];
