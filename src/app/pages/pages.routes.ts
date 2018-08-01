import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './charts/chart.component';
import { TablesComponent } from './tables/tables.component';
import { SettingsComponent } from './settings/settings.component';
import { NutritionalRegimenComponent } from './nutritional-regimen/nutritional-regimen.component';
import { HotelComponent } from './hotel/hotel.component';
import { StayComponent } from './stay/stay.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartComponent },
      { path: 'nutritional-regimen', component: NutritionalRegimenComponent },
      { path: 'hotel', component: HotelComponent },
      { path: 'stays', component: StayComponent },
      { path: 'users', component: UserComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
