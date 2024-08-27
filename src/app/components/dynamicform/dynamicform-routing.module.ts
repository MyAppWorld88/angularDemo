import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';

const routes: Routes = [
  {path:'form',component:DynamicformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicformRoutingModule { }
