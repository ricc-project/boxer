import { Routes } from '@angular/router';

import { LandingPageComponent} from './ricc-join/landing-page/landing-page.component'
import { SignUpComponent } from './ricc-join/sign-up/sign-up.component'
import { LoginComponent } from './ricc-join/login/login.component'

import { HomeComponent } from './ricc-dashboard/home/home.component';

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
];
