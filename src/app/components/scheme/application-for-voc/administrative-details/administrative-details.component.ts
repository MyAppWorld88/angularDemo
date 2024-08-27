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
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;
  cities:any;


  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
  
}
