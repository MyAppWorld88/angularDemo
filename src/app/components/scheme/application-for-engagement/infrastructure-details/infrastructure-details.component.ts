import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-infrastructure-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './infrastructure-details.component.html',
  styleUrl: './infrastructure-details.component.scss'
})
export class InfrastructureDetailsComponent {
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;
  cities:any;
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
