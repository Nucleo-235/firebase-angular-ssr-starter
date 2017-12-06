import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { AuthGuard, RoleGuard } from './global/guards/guards';
import {
    HomeComponent, 
    RegisterComponent,
    // ResetPasswordComponent,
    // AccountComponent,
    // CompleteAccountComponent
  } from './pages/public';

export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: '**',
        redirectTo: 'home'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(
    router,
    // { enableTracing: true }
);
