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
  accType:any;
  ngOnInit() {
    this.accType = [
        { name: 'Single', code: 'NY' },
        { name: 'Joint', code: 'RM' },
    ];
    this.userType = [
      { name: 'Students', code: 'S' },
      { name: 'Other', code: 'O' },
  ];
}
upload(files:any){
  console.log('files', files)
  //pick from one of the 4 styles of file uploads below
  // this.uploadAndProgress(files);
}
}