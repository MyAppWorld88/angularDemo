import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AdministrativeDetailsComponent } from './administrative-details/administrative-details.component';
import { InfrastructureDetailsComponent } from './infrastructure-details/infrastructure-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { YearWiseDetailsComponent } from './year-wise-details/year-wise-details.component';
import { GrantRecievedDetailsComponent } from './grant-recieved-details/grant-recieved-details.component';
import { EngagedTeachersComponent } from './engaged-teachers/engaged-teachers.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-application-for-engagement',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, AdministrativeDetailsComponent, InfrastructureDetailsComponent, FinancialDetailsComponent, YearWiseDetailsComponent, GrantRecievedDetailsComponent, EngagedTeachersComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './application-for-engagement.component.html',
  styleUrl: './application-for-engagement.component.scss'
})
export class ApplicationForEngagementComponent {

}
