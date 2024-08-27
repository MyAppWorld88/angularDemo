import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAssistanceForSanskritTeacherComponent } from './financial-assistance-for-sanskrit-teacher.component';

const routes: Routes = [
  {path:'',component:FinancialAssistanceForSanskritTeacherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialAssistanceForSanskritTeacherRoutingModule { }
