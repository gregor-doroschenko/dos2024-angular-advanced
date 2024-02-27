import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signals',
        component: SignalsComponent
    }
];
