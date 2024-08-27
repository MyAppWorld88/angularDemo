import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { VocationalTrainingComponent } from './vocational-training/vocational-training.component';
import { AdministrativeDetailsComponent } from './administrative-details/administrative-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-application-for-voc',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, VocationalTrainingComponent, AdministrativeDetailsComponent, FinancialDetailsComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './application-for-voc.component.html',
  styleUrl: './application-for-voc.component.scss'
})
export class ApplicationForVocComponent {

}
