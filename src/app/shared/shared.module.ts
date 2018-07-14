import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

const COMPONENTS = [HeaderComponent, SidebarComponent, BreadcrumbComponent, NotpagefoundComponent, FooterComponent, ScrollTopComponent];

@NgModule({
    imports: [RouterModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedModule { }
