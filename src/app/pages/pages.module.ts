import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { OnlyNumberDirective } from '../directives/only-number.directive';

@NgModule({
  declarations: [UserComponent, PagesComponent, OnlyNumberDirective],
  exports: [UserComponent, PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
