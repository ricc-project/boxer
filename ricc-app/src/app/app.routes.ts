import { Routes } from '@angular/router';

import { LandingPageComponent} from './ricc-join/landing-page/landing-page.component'
import { SignUpComponent } from './ricc-join/sign-up/sign-up.component'
import { LoginComponent } from './ricc-join/login/login.component'
import { AboutUsComponent } from './ricc-join/about-us/about-us.component'
import { ForgotPasswordComponent } from './ricc-join/forgot-password/forgot-password.component'
import { SeeMoreComponent } from './ricc-join/see-more/see-more.component'

import { HomeComponent } from './ricc-dashboard/home/home.component';
import { ProfileComponent } from './ricc-dashboard/profile/profile.component';
import { UserSettingsComponent } from './ricc-dashboard/user-settings/user-settings.component';
import { CentralsComponent } from './ricc-dashboard/centrals/centrals.component';
import { StationsComponent } from './ricc-dashboard/stations/stations.component';
import { ActuatorsComponent } from './ricc-dashboard/actuators/actuators.component';
import { UserGuestsComponent } from './ricc-dashboard/user-guests/user-guests.component';
import { ContactUsComponent } from './ricc-dashboard/contact-us/contact-us.component';


export const routes: Routes = [
  {
      path: '',
      component: LandingPageComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'seemore',
    component: SeeMoreComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },      
  {
    path: 'profile/user',
    component: ProfileComponent,
  },
  {
    path: 'profile/settings',
    component: UserSettingsComponent,
  },
  {
    path: 'riccs/centrals',
    component: CentralsComponent,
  },
  {
    path: 'riccs/stations',
    component: StationsComponent,
  },
  {
    path: 'riccs/:central/stations',
    component: StationsComponent,
  },
  {
    path: 'riccs/actuators',
    component: ActuatorsComponent,
  },
  {
    path: 'riccs/:central/actuators',
    component: ActuatorsComponent,
  },
  {
    path: 'user/guests',
    component: UserGuestsComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },

];
