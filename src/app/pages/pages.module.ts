import { NgModule } from '@angular/core';
// Routes
import { PAGE_ROUTES } from './pages.routes';
// Modules
import { I18nConfigModule } from 'i18n-config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Components
import { PagesComponent } from './pages.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Temporal - Importar a SharedModule (cuando se cree)
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


const COMPONENTS = [ChartsComponent, DashboardComponent, HeaderComponent, SidebarComponent];

@NgModule({
  imports: [
    PAGE_ROUTES,
    I18nConfigModule,
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  declarations: COMPONENTS.concat([PagesComponent]),
  exports: COMPONENTS
})
export class PagesModule {}
