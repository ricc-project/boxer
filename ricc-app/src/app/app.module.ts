import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ricc-dashboard/home/home.component';
import { LandingPageComponent } from './ricc-join/landing-page/landing-page.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SignUpComponent } from './ricc-join/sign-up/sign-up.component';
import { ProfileComponent } from './ricc-dashboard/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    NavbarComponent,
    SignUpComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
