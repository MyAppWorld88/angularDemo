import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-details-of-institution-publisher',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './details-of-institution-publisher.component.html',
  styleUrl: './details-of-institution-publisher.component.scss'
})
export class DetailsOfInstitutionPublisherComponent {
  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
