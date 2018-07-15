import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './charts/chart.component';
import { TablesComponent } from './tables/tables.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'tables', component: TablesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
