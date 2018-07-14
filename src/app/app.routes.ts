import { Routes, RouterModule } from '@angular/router';

import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { LoginComponent } from './login/login-form/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotComponent } from './login/forgot/forgot.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '**', component: NotpagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
