import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationalQulificationComponent } from './educational-qulification/educational-qulification.component';
import { TeachingExperianceComponent } from './teaching-experiance/teaching-experiance.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OthersComponent } from './others/others.component';
import { ScholarPrefrenceComponent } from './scholar-prefrence/scholar-prefrence.component';

@Component({
  selector: 'app-shastra-chudamani',
  standalone: true,
  imports: [PrimengModule, PersonalDetailComponent, EducationalQulificationComponent, TeachingExperianceComponent, BankDetailsComponent, OthersComponent,ScholarPrefrenceComponent],
  templateUrl: './shastra-chudamani.component.html',
  styleUrl: './shastra-chudamani.component.scss'
})
export class ShastraChudamaniComponent {

}
