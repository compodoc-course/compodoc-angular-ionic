import { NgModule } from '@angular/core';
// Routes
import { PAGE_ROUTES } from './pages.routes';
// Modules
import { I18nConfigModule } from 'i18n-config';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { TableModule } from 'ngx-easy-table';

// Components
import { PagesComponent } from './pages.component';
import { ChartComponent } from './charts/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoughnutChartComponent } from '../components/charts/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../components/charts/bar-chart/bar-chart.component';
import { PolarAreaChartComponent } from '../components/charts/polar-area-chart/polar-area-chart.component';
import { PieChartComponent } from '../components/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from '../components/charts/radar-chart/radar-chart.component';
import { LineChartComponent } from '../components/charts/line-chart/line-chart.component';
import { TablesComponent } from './tables/tables.component';
import { SettingsComponent } from './settings/settings.component';
import { NutritionalRegimenComponent } from './nutritional-regimen/nutritional-regimen.component';
import { HotelComponent } from './hotel/hotel.component';
import { StayComponent } from './stay/stay.component';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { SupportComponent } from './support/support.component';
import { RoundPipe } from '../pipes/round.pipe';

const COMPONENTS = [
  DashboardComponent,
  LineChartComponent,
  BarChartComponent,
  NutritionalRegimenComponent,
  HotelComponent,
  PolarAreaChartComponent,
  PieChartComponent,
  RadarChartComponent,
  DoughnutChartComponent,
  TablesComponent,
  ChartComponent,
  SettingsComponent,
  StayComponent,
  ClientComponent,
  UserComponent,
  SupportComponent
];

const PIPES = [RoundPipe];

const DECLARATIONS = [...[PagesComponent], ...PIPES, ...COMPONENTS];

@NgModule({
  imports: [
    PAGE_ROUTES,
    I18nConfigModule,
    BrowserModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    TableModule
  ],
  exports: COMPONENTS,
  declarations: DECLARATIONS
})
export class PagesModule {}
