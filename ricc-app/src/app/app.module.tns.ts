import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ricc-dashboard/home/home.component';
import { LandingPageComponent } from './ricc-join/landing-page/landing-page.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SignUpComponent } from './ricc-join/sign-up/sign-up.component';
import { ProfileComponent } from './ricc-dashboard/profile/profile.component';
import { LoginComponent } from './ricc-join/login/login.component';
import { AboutUsComponent } from './ricc-join/about-us/about-us.component';
import { ForgotPasswordComponent } from './ricc-join/forgot-password/forgot-password.component';
import { SeeMoreComponent } from './ricc-join/see-more/see-more.component';
import { ContactUsComponent } from './ricc-dashboard/contact-us/contact-us.component';
import { UserSettingsComponent } from './ricc-dashboard/user-settings/user-settings.component';
import { CentralsComponent } from './ricc-dashboard/centrals/centrals.component';
import { StationsComponent } from './ricc-dashboard/stations/stations.component';
import { ActuatorsComponent } from './ricc-dashboard/actuators/actuators.component';
import { UserGuestsComponent } from './ricc-dashboard/user-guests/user-guests.component';
import { TemperatureCardComponent } from './graphics/soil/temperature-card/temperature-card.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    NavbarComponent,
    SignUpComponent,
    ProfileComponent,
    LoginComponent,
    AboutUsComponent,
    ForgotPasswordComponent,
    SeeMoreComponent,
    ContactUsComponent,
    UserSettingsComponent,
    CentralsComponent,
    StationsComponent,
    ActuatorsComponent,
    UserGuestsComponent,
    TemperatureCardComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
