import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './charts/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { DriversComponent } from './drivers/drivers.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { RacesComponent } from './races/races.component';
import { ChampionsComponent } from './champions/champions.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'circuits', component: CircuitsComponent },
      { path: 'races', component: RacesComponent },
      { path: 'champions', component: ChampionsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'support', component: SupportComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
