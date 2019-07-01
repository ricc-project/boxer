import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TemperatureCardComponent } from './graphics/soil/temperature-card/temperature-card.component';

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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
