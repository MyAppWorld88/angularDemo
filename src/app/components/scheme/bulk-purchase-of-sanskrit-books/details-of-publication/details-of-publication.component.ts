import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-details-of-publication',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './details-of-publication.component.html',
  styleUrl: './details-of-publication.component.scss'
})
export class DetailsOfPublicationComponent {
  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
