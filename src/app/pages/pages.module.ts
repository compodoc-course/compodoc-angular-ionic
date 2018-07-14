import { NgModule } from '@angular/core';
// Routes
import { PAGE_ROUTES } from './pages.routes';
// Modules
import { I18nConfigModule } from 'i18n-config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

// Components
import { PagesComponent } from './pages.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const COMPONENTS = [ChartsComponent, DashboardComponent];

@NgModule({
  imports: [
    PAGE_ROUTES,
    I18nConfigModule,
    BrowserModule,
    FormsModule,
    ChartsModule,
    SharedModule
  ],
  declarations: COMPONENTS.concat([PagesComponent]),
  exports: COMPONENTS
})
export class PagesModule {}
