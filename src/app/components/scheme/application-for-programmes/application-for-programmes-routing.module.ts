import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationForProgrammesComponent } from './application-for-programmes/application-for-programmes.component';

const routes: Routes = [
  {path:'application',component:ApplicationForProgrammesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationForProgrammesRoutingModule { }
