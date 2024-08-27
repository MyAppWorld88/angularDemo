import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ShastraChudamaniComponent } from './shastra-chudamani/shastra-chudamani.component';
import { SammanRashiComponent } from './samman-rashi/samman-rashi.component';
import { FinancialAssistanceForSanskritTeacherComponent } from './financial-assistance-for-sanskrit-teacher/financial-assistance-for-sanskrit-teacher.component';
import { ApplicationForVocComponent } from './application-for-voc/application-for-voc.component';
import { ApplicationForEngagementComponent } from './application-for-engagement/application-for-engagement.component';
import { PublicationAndReprintOfSanskritBooksComponent } from './publication-and-reprint-of-sanskrit-books/publication-and-reprint-of-sanskrit-books.component';
import { PublicationOfSanskritJournalComponent } from './publication-of-sanskrit-journal/publication-of-sanskrit-journal.component';
import { BulkPurchaseOfSanskritBooksComponent } from './bulk-purchase-of-sanskrit-books/bulk-purchase-of-sanskrit-books.component';
import { AshtadashiComponent } from './ashtadashi/ashtadashi.component';

const routes: Routes = [
  {path: 'scholarship',
  loadChildren: () => import('./scholarship/scholarship.module').then(m => m.ScholarshipModule)},
  {path: 'shastra-chudamani',
  loadChildren: () => import('./shastra-chudamani/shastra-chudamani.module').then(m => m.ShastraChudamaniModule)},
  {path: 'samman-rashi',
  loadChildren: () => import('./samman-rashi/samman-rashi.module').then(m => m.SammanRashiModule)},
  {path: 'financial-assistance', 
  loadChildren: () => import('./financial-assistance-for-sanskrit-teacher/financial-assistance-for-sanskrit-teacher.module').then(m => m.FinancialAssistanceForSanskritTeacherModule)},
  {path: 'application-voc', 
  loadChildren: () => import('./application-for-voc/application-for-voc.module').then(m => m.ApplicationForVocModule)},
  {path: 'application-engement', 
  loadChildren: () => import('./application-for-engagement/application-for-engagement.module').then(m => m.ApplicationForEngagementModule)},
  {path: 'publication-sanskrit-books',
  loadChildren: () => import('./publication-and-reprint-of-sanskrit-books/publication-and-reprint-of-sanskrit-books.module').then(m => m.PublicationAndReprintOfSanskritBooksModule)},
  {path: 'publication-sanskrit-journal',
  loadChildren: () => import('./publication-of-sanskrit-journal/publication-of-sanskrit-journal.module').then(m => m.PublicationOfSanskritJournalModule)},
  {path: 'bluk-purchase', 
  loadChildren: () => import('./bulk-purchase-of-sanskrit-books/bulk-purchase-of-sanskrit-books.module').then(m => m.BulkPurchaseOfSanskritBooksModule)},
  {path: 'ashtadashi', 
  loadChildren: () => import('./ashtadashi/ashtadashi.module').then(m => m.AshtadashiModule)},
  {path: 'application-for-programmes',
  loadChildren: () => import('./application-for-programmes/application-for-programmes.module').then(m => m.ApplicationForProgrammesModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeRoutingModule { }
