import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-engaged-teachers',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './engaged-teachers.component.html',
  styleUrl: './engaged-teachers.component.scss'
})
export class EngagedTeachersComponent {
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
