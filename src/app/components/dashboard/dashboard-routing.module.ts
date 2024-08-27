import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonService } from '../../services/common.service';

const routes: Routes = [
  { path: '', component: DashboardComponent,canActivate: [() => inject(CommonService).isLoggedIn()]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
