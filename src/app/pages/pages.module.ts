import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { PositionComponent } from './position/position.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    UserComponent,
    CategoryComponent,
    PositionComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    UserComponent,
    CategoryComponent,
    PositionComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    DataTablesModule,
  ],
})
export class PagesModule {}
