import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanskritPromotionComponent } from './sanskrit-promotion/sanskrit-promotion.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

const routes: Routes = [
  {path: 'promotion', component: SanskritPromotionComponent},
  {path: 'personal-detail', component: PersonalDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanskritPromotionRoutingModule { }
