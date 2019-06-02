import { Routes } from '@angular/router';

import { LandingPageComponent} from './ricc-join/landing-page/landing-page.component'
import { SignUpComponent } from './ricc-join/sign-up/sign-up.component'
import { LoginComponent } from './ricc-join/login/login.component'
import { AboutUsComponent } from './ricc-join/about-us/about-us.component'
import { ForgotPasswordComponent } from './ricc-join/forgot-password/forgot-password.component'
import { SeeMoreComponent } from './ricc-join/see-more/see-more.component'

import { HomeComponent } from './ricc-dashboard/home/home.component';
import { ProfileComponent } from './ricc-dashboard/profile/profile.component';

export const routes: Routes = [
  {
      path: '',
      component: LandingPageComponent,
  },
  {
      path: 'home',
      component: HomeComponent,
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
    path: 'profile/user',
    component: ProfileComponent,
  },

];
