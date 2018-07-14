import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'charts', component: ChartsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
