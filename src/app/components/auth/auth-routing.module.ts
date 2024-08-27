import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CommonService } from '../../services/common.service';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: AuthComponent,canActivate: [() => inject(CommonService).isLoggedIn()],children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',  loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'myform',  loadChildren: () => import('./../myform/myform.module').then(m => m.MyformModule)},
    {path:'dynamic',  loadChildren: () => import('./../dynamicform/dynamicform.module').then(m => m.DynamicformModule)},
    // {path:"**",component:PageNotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
