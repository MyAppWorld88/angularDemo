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
  presentClassPHD:boolean = false;
  isSubmitted=false;
  gender:any=[{key:'Male',value:'Male'},{key:'Female',value:'Female'}];
  categories: any = [{ name: 'PHD', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }];
  states: any = [{ state: 'Delhi', stateCode: 'Del' },
  { state: 'Mumbai', stateCode: 'mum' },
  { state: 'Goa', stateCode: 'goa' },
  { state: 'Uttar Pradesh', stateCode: 'UP' },
  { state: 'Bihar', stateCode: 'BH' }];
  districts: any = [{ districtName: 'North East', distictCode: '7' },
  { districtName: 'East', distictCode: '6' },
  { districtName: 'West', distictCode: '5' },
  { districtName: 'North West', distictCode: '4' },
  { districtName: 'South', distictCode: '3' }];
  subDistricts: any = [{ districtName: 'North East', distictCode: '7' },
  { districtName: 'East', distictCode: '6' },
  { districtName: 'West', distictCode: '5' },
  { districtName: 'North West', distictCode: '4' },
  { districtName: 'South', distictCode: '3' }];
  block:any=[];
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;
  constructor(){}
 
  ngOnInit() {
   
}
upload(files:any){
  console.log('files', files)
  //pick from one of the 4 styles of file uploads below
  // this.uploadAndProgress(files);
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
