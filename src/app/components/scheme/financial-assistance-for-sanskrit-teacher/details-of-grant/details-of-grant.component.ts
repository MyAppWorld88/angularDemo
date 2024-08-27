import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-details-of-grant',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './details-of-grant.component.html',
  styleUrl: './details-of-grant.component.scss'
})
export class DetailsOfGrantComponent {
  percentDone: any;
  uploadSuccess: any;

  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}