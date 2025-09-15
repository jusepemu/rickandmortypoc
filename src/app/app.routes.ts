import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { MainLayout } from '@shared/layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                component: HomePage,
                title: 'Home'
            },
            {
                path: 'characters',
                loadComponent: () => import('./characters/characters').then(m => m.Characters),
                title: 'Characters'
            },
            {
                path: 'episodes',
                loadComponent: () => import('./episodes/episodes').then(m => m.Episodes),
                title: 'Episodes'
            },
            {
                path: 'favorites',
                loadComponent: () => import('./favorites/favorites').then(m => m.Favorites),
                title: 'Favorites'
            }
        ]
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.AboutPage),
        title: 'About'
    }
];
