import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationOfSanskritJournalComponent } from './publication-of-sanskrit-journal.component';

const routes: Routes = [
  {path:'',component:PublicationOfSanskritJournalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationOfSanskritJournalRoutingModule { }
