import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './charts/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'support', component: SupportComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
