import { Routes } from '@angular/router';
import { HomePage } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomePage,
        title: 'Home'
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.AboutPage),
        title: 'About'
    }
];
