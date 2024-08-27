import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-details-of-previous-grants',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './details-of-previous-grants.component.html',
  styleUrl: './details-of-previous-grants.component.scss'
})
export class DetailsOfPreviousGrantsComponent {
  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
