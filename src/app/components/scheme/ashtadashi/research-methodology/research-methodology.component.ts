import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-research-methodology',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './research-methodology.component.html',
  styleUrl: './research-methodology.component.scss'
})
export class ResearchMethodologyComponent {
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
upload(files:any){
  console.log('files', files)
  //pick from one of the 4 styles of file uploads below
  // this.uploadAndProgress(files);
}
}