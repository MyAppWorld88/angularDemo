import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-bank-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.scss'
})
export class BankDetailsComponent {
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
}
