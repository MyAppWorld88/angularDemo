import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { JournalDetailsComponent } from './journal-details/journal-details.component';
import { AdministrativeDetailsComponent } from './administrative-details/administrative-details.component';
import { PreviousGrantsComponent } from './previous-grants/previous-grants.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-publication-of-sanskrit-journal',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, JournalDetailsComponent, AdministrativeDetailsComponent, PreviousGrantsComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './publication-of-sanskrit-journal.component.html',
  styleUrl: './publication-of-sanskrit-journal.component.scss'
})
export class PublicationOfSanskritJournalComponent {

}
