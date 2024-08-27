import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PublicationSubmitedComponent } from './publication-submited/publication-submited.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { PreviousGrantsRecievedComponent } from './previous-grants-recieved/previous-grants-recieved.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-publication-and-reprint-of-sanskrit-books',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, PublicationSubmitedComponent, FinancialDetailsComponent, PreviousGrantsRecievedComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './publication-and-reprint-of-sanskrit-books.component.html',
  styleUrl: './publication-and-reprint-of-sanskrit-books.component.scss'
})
export class PublicationAndReprintOfSanskritBooksComponent {

}
