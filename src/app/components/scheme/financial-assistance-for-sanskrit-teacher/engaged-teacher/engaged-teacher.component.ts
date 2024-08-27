import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-engaged-teacher',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './engaged-teacher.component.html',
  styleUrl: './engaged-teacher.component.scss'
})
export class EngagedTeacherComponent {
  typeArr:any;
  testArr:any;

  ngOnInit(){
    this.testArr = [
      { name: 'Already engaged ', code: 'NY' },
      { name: 'Additional Requirement', code: 'RM' },
    ]

    // this.typeArr = [
    //   { name: 'Vyakaran', code: 'NY' },
    //   { name: 'Jyotish', code: 'RM' },
    // ]

  }

  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
