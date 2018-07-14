import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';


const COMPONENTS = [HeaderComponent, SidebarComponent, BreadcrumbComponent, NotpagefoundComponent, FooterComponent];

@NgModule({
    imports: [],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SharedModule { }
