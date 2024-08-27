import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { InvestigatorDetailsComponent } from './investigator-details/investigator-details.component';
import { ResearchMethodologyComponent } from './research-methodology/research-methodology.component';
import { RequiredBudgetComponent } from './required-budget/required-budget.component';
import { TimeBudgetComponent } from './time-budget/time-budget.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-ashtadashi',
  standalone: true,
  imports: [PrimengModule, PersonalDetailsComponent, InvestigatorDetailsComponent, ResearchMethodologyComponent, RequiredBudgetComponent, TimeBudgetComponent, BankDetailsComponent, OthersComponent],
  templateUrl: './ashtadashi.component.html',
  styleUrl: './ashtadashi.component.scss'
})
export class AshtadashiComponent {

}
