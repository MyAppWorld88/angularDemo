import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SammanRashiComponent } from './samman-rashi.component';

const routes: Routes = [
  {path:'',component:SammanRashiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SammanRashiRoutingModule { }
