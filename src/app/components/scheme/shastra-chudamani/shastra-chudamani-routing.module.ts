import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShastraChudamaniComponent } from './shastra-chudamani.component';

const routes: Routes = [
  {path:'',component:ShastraChudamaniComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShastraChudamaniRoutingModule { }
