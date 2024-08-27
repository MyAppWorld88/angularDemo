import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkPurchaseOfSanskritBooksComponent } from './bulk-purchase-of-sanskrit-books.component';

const routes: Routes = [
  {path:'',component:BulkPurchaseOfSanskritBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkPurchaseOfSanskritBooksRoutingModule { }
