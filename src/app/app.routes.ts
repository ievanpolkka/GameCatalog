import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesPageComponent } from './games-page/games-page.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent)},
    { path: 'games', loadComponent: () => import('./games-page/games-page.component').then(m => m.GamesPageComponent) },
    { path: 'about', loadComponent: () => import('./about-page/about-page.component').then(m => m.AboutPageComponent) },
    { path: 'contact', loadComponent: () => import('./contact-page/contact-page.component').then(m => m.ContactPageComponent) },
];


