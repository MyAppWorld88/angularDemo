import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-financial-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.scss'
})
export class FinancialDetailsComponent {
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