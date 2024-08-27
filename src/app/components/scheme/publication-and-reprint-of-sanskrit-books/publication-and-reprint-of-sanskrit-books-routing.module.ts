import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationAndReprintOfSanskritBooksComponent } from './publication-and-reprint-of-sanskrit-books.component';

const routes: Routes = [
  {path:'',component:PublicationAndReprintOfSanskritBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationAndReprintOfSanskritBooksRoutingModule { }
