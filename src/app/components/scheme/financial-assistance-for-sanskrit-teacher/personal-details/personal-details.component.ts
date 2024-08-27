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
  appliedArr:any;
  whatherArr:any;
  institutionArr:any;
  institutionalType:any;
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;

  ngOnInit() {
    this.appliedArr = [
      { name: 'Sanskrit Teacher for Govt School', code: 'NY' },
      { name: 'Modern Teacher', code: 'RM' },
      { name: 'Traditional Teacher', code: 'LDN' },
      { name: 'Catuspathiya / Guru Sikh Pranayam', code: 'IST' },
      { name: 'Maintaince Screen', code: 'PRS' }
    ]
    this.whatherArr = [ 
      { name: 'Fresh', code: 'NY' },
      { name: 'Renewal', code: 'RM' },
    ]
    this.institutionArr = [ 
      { name: 'Private/NGO', code: 'NY' },
      { name: 'Aided ', code: 'RM' },
      { name: 'Government', code: 'NY' },
      { name: 'Others', code: 'RM' },
    ]
    this.institutionalType = [
      { name: 'Traditional', code: 'NY' },
      { name: 'Modern', code: 'RM' },
    ]
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