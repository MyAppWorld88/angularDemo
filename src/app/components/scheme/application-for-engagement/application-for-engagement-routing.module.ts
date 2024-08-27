import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationForEngagementComponent } from './application-for-engagement.component';

const routes: Routes = [
  {path:'',component:ApplicationForEngagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationForEngagementRoutingModule { }
