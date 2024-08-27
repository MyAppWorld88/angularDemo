import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QualificationComponent } from './qualification/qualification.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';
import { DependentMemberComponent } from './dependent-member/dependent-member.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-samman-rashi',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, QualificationComponent, BankDetailsComponent,OthersComponent, DependentMemberComponent, ExperienceComponent],
  templateUrl: './samman-rashi.component.html',
  styleUrl: './samman-rashi.component.scss'
})
export class SammanRashiComponent {

}
