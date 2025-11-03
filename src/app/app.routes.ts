import { Routes } from '@angular/router';
import { HomePage } from './home/home';
import { MainLayout } from '@shared/layouts/main-layout/main-layout';
import { characterDetailResolver } from './characters/character-detail/resolver';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePage,
        title: 'Home',
      },
      {
        path: 'characters',
        loadComponent: () => import('./characters/characters').then((m) => m.Characters),
        title: 'Characters',
      },
      {
        path: 'characters/:characterId',
        loadComponent: () =>
          import('./characters/character-detail/character-detail').then((m) => m.CharacterDetail),
        title: 'Character Detail',
        resolve: {
          character: characterDetailResolver,
        },
      },
      {
        path: 'episodes',
        loadComponent: () =>
          import('./episodes/episode-list/episode-list').then((m) => m.EpisodeList),
        title: 'Episodes',
      },
      {
        path: 'favorites',
        loadComponent: () => import('./favorites/favorites').then((m) => m.Favorites),
        title: 'Favorites',
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.AboutPage),
    title: 'About',
  },
];
