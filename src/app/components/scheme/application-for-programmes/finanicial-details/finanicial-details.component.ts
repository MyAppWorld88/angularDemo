import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-finanicial-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './finanicial-details.component.html',
  styleUrl: './finanicial-details.component.scss'
})
export class FinanicialDetailsComponent {
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
