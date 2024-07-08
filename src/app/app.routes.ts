import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/projects.routes').then(m => m.default)
    }
];
