import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationForVocComponent } from './application-for-voc.component';

const routes: Routes = [
  {path:'',component:ApplicationForVocComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationForVocRoutingModule { }
