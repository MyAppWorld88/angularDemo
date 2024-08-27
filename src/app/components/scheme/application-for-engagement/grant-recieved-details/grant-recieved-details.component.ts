import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-grant-recieved-details',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './grant-recieved-details.component.html',
  styleUrl: './grant-recieved-details.component.scss'
})
export class GrantRecievedDetailsComponent {
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
