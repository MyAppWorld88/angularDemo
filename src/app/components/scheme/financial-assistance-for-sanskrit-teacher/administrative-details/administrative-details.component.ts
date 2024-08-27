import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-administrative-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './administrative-details.component.html',
  styleUrl: './administrative-details.component.scss'
})
export class AdministrativeDetailsComponent {
  percentDone: any;
  uploadSuccess: any;
  cities:any;
  studentsArr:any;
  subjectArr:any;
  ngOnInit() {
    this.studentsArr = [
      { name: 'Prathama – I', code: 'NY' },
      { name: 'Prathama – II', code: 'RM' },
      { name: 'Prathama – III ', code: 'LDN' },
      { name: 'Poorva Madhyma - I ', code: 'IST' },
      { name: 'Poorva Madhyma – II' , code: 'PRS' },
      { name: 'Uttar Madhyma/Prak Shastri - I ', code: 'NY' },
      { name: 'Uttar Madhyma/ Prak Shastri – II ', code: 'RM' },
      { name: 'Shastri', code: 'LDN' },
      { name: 'Acharya', code: 'IST' },
      { name: 'Vidya Varidhi' , code: 'PRS' },
      { name: ' Others (then specify)' , code: 'PRS' }
    ],

    this.subjectArr = [
      { name: 'Vyakaran', code: 'NY' },
      { name: 'Jyotish', code: 'RM' },
      { name: 'Sahitya', code: 'LDN' },
      { name: 'Dharmshastra', code: 'IST' },
      { name: 'Puranetihas' , code: 'PRS' },
      { name: 'Ved', code: 'NY' },
      { name: 'Nyaya', code: 'RM' },
      { name: 'Darshan', code: 'LDN' },
      { name: 'Advait Vedant ', code: 'IST' },
      { name: 'Sankhya Yoga' , code: 'PRS' },
      { name: 'Jain Darshan' , code: 'PRS' },
      { name: 'Poorva Mimansa' , code: 'PRS' },
      { name: 'Bodh Darshan ' , code: 'PRS' },
      { name: 'Other (then Specify)' , code: 'PRS' }
    ]
  }

  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }


}
