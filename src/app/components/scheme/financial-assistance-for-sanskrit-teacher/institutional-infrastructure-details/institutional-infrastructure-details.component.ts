import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-institutional-infrastructure-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './institutional-infrastructure-details.component.html',
  styleUrl: './institutional-infrastructure-details.component.scss'
})
export class InstitutionalInfrastructureDetailsComponent {
  ercentDone: any;
  uploadSuccess: any;
  institutionArr:any = [
    {name: 'Yes', code: 'NY' },
    { name: 'No', code: 'RM' },
    ]

  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }

}
