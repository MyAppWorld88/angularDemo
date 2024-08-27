import { Component } from '@angular/core';
import { PersonalDetailComponent } from '../personal-detail/personal-detail.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { DetailsProgrammesActivitiesComponent } from '../details-programmes-activities/details-programmes-activities.component';
import { AdministrativeDetailsComponent } from '../administrative-details/administrative-details.component';
import { FinanicialDetailsComponent } from '../finanicial-details/finanicial-details.component';
import { DetailsOfPreviousGrantsComponent } from '../details-of-previous-grants/details-of-previous-grants.component';
import { BankDetailsComponent } from '../bank-details/bank-details.component';
import { OthersComponent } from '../others/others.component';

@Component({
  selector: 'app-application-for-programmes',
  standalone: true,
  imports: [PersonalDetailComponent,FormsModule,PrimengModule,FieldsetModule,AvatarModule, DetailsProgrammesActivitiesComponent, AdministrativeDetailsComponent, FinanicialDetailsComponent, DetailsOfPreviousGrantsComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './application-for-programmes.component.html',
  styleUrl: './application-for-programmes.component.scss'
})
export class ApplicationForProgrammesComponent {

}
