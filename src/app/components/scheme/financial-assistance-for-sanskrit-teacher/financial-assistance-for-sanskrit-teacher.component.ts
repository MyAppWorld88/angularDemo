import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AdministrativeDetailsComponent } from './administrative-details/administrative-details.component';
import { InstitutionalInfrastructureDetailsComponent } from './institutional-infrastructure-details/institutional-infrastructure-details.component';
import { DetailsOfGrantComponent } from './details-of-grant/details-of-grant.component';
import { CsuDetailsComponent } from './csu-details/csu-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { OthersComponent } from './others/others.component';
import { EngagedTeacherComponent } from './engaged-teacher/engaged-teacher.component';

@Component({
  selector: 'app-financial-assistance-for-sanskrit-teacher',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, AdministrativeDetailsComponent, InstitutionalInfrastructureDetailsComponent, DetailsOfGrantComponent, CsuDetailsComponent, BankDetailsComponent, FinancialDetailsComponent, OthersComponent, EngagedTeacherComponent],
  templateUrl: './financial-assistance-for-sanskrit-teacher.component.html',
  styleUrl: './financial-assistance-for-sanskrit-teacher.component.scss'
})
export class FinancialAssistanceForSanskritTeacherComponent {
  
}
