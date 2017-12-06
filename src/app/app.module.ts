import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Routing
import { appRouter } from './app.router';
import { Router } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/public';
import { RegisterComponent } from './pages/public/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "starter-website" }),
    appRouter,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
