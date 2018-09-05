import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { I18nConfigModule } from 'i18n-config';
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    I18nConfigModule.forRoot(),
    PagesModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
