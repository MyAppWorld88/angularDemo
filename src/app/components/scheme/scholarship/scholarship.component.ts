import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PrimengModule } from '../../../primeng/primeng.module';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ExaminationScholarshipComponent } from './examination-scholarship/examination-scholarship.component';
import { OthersComponent } from './others/others.component';
@Component({
  selector: 'app-scholarship',
  standalone: true,
  imports: [FormsModule,PrimengModule, FieldsetModule,AvatarModule,CommonModule,BankDetailComponent,PersonalDetailComponent,ExaminationScholarshipComponent, OthersComponent],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.scss'
})
export class ScholarshipComponent {
  cities:any;
  selectedCity:any;
  userType:any;
  isStudent:boolean = false;
  activeTab: number = 0;
  presentClassPHD:boolean = false
  ngOnInit() {
    this.cities = [
        { name: 'PHD', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    this.userType = [
      { name: 'Students', code: 'S' },
      { name: 'Other', code: 'O' },
  ];
}



setActiveTab(tabIndex: number) {
  this.activeTab = tabIndex;
}

selectClass(event:any){
  console.log('event.value.name', event.value.name)
  if(event.value.name == 'PHD'){
    console.log('1')
    this.presentClassPHD = true
  }
  else{
    this.presentClassPHD = false
  }
  
}
}
