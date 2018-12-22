import { Routes, RouterModule } from '@angular/router';

import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { LoginComponent } from './login/login-form/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotComponent } from './login/forgot/forgot.component';

/**
 * Define principal routes to use in app
 */
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '**', component: NotpagefoundComponent }
];

/**
 * Take app routes const paths and intialize Router Module with hash true config
 */
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
