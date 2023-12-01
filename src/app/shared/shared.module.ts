import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
