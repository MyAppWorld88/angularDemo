import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DetailsOfInstitutionPublisherComponent } from './details-of-institution-publisher/details-of-institution-publisher.component';
import { DetailsOfPublicationComponent } from './details-of-publication/details-of-publication.component';
import { DetailsOfPreviousGrantsComponent } from './details-of-previous-grants/details-of-previous-grants.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-bulk-purchase-of-sanskrit-books',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, DetailsOfInstitutionPublisherComponent, DetailsOfPublicationComponent, DetailsOfPreviousGrantsComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './bulk-purchase-of-sanskrit-books.component.html',
  styleUrl: './bulk-purchase-of-sanskrit-books.component.scss'
})
export class BulkPurchaseOfSanskritBooksComponent {

}
