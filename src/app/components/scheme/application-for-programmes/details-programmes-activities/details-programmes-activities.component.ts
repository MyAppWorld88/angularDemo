import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-details-programmes-activities',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './details-programmes-activities.component.html',
  styleUrl: './details-programmes-activities.component.scss'
})
export class DetailsProgrammesActivitiesComponent {
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
