import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
