import { NgModule } from '@angular/core';
import { LoginComponent } from './login-form/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RouterModule } from '@angular/router';



const COMPONENTS = [
    LoginComponent,
    RegisterComponent,
    ForgotComponent
];

@NgModule({
  imports: [RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LoginModule {}
