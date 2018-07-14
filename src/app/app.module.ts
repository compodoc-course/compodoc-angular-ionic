import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { I18nConfigModule } from 'i18n-config';
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login-form/login.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    FooterComponent,
    BreadcrumbComponent,
    NotpagefoundComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    I18nConfigModule.forRoot(),
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
