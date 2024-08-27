import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
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