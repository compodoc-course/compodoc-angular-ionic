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
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

// Components
import { PagesComponent } from './pages.component';
import { RacesComponent } from './races/races.component';
import { ChartComponent } from './charts/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoughnutChartComponent } from '../components/charts/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../components/charts/bar-chart/bar-chart.component';
import { PolarAreaChartComponent } from '../components/charts/polar-area-chart/polar-area-chart.component';
import { PieChartComponent } from '../components/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from '../components/charts/radar-chart/radar-chart.component';
import { LineChartComponent } from '../components/charts/line-chart/line-chart.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { ChampionsComponent } from './champions/champions.component';
import { DriversComponent } from './drivers/drivers.component';

// Constants
import { GOOGLEMAPS } from '../../environments/api-keys';

// Pipes
import { RoundPipe } from '../pipes/round.pipe';


const COMPONENTS = [
  ChampionsComponent,
  CircuitsComponent,
  DashboardComponent,
  DriversComponent,
  LineChartComponent,
  BarChartComponent,
  PolarAreaChartComponent,
  PieChartComponent,
  RadarChartComponent,
  DoughnutChartComponent,
  ChartComponent,
  RacesComponent,
  SettingsComponent,
  SupportComponent
];

const PIPES = [RoundPipe];

const DECLARATIONS = [...[PagesComponent], ...PIPES, ...COMPONENTS];

@NgModule({
  imports: [
    PAGE_ROUTES,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLEMAPS
    }),
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
