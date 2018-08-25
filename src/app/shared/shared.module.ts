import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

const COMPONENTS = [HeaderComponent, SidebarComponent, BreadcrumbComponent, NotpagefoundComponent, FooterComponent, ScrollTopComponent];
const PIPES = [CapitalizePipe];

const DECLARATIONS = [...PIPES, ...COMPONENTS];
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: DECLARATIONS,
    exports: DECLARATIONS
})
export class SharedModule {}
