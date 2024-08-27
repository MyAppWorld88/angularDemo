import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent {
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;
  cities:any;
  yearArr:any;
  categoryArr:any;
  teacherArr:any;
  noTeacherArr:any

  ngOnInit(){
    this.yearArr = [
    { name: 'Previous Financial Year', code: 'NY' },
    { name: 'Current Financial Year', code: 'RM' },]
    
    this.categoryArr = [
    { name: 'Engaged by the Institution ', code: 'NY' },
    { name: 'From other Sources ', code: 'RM' },]
    
    this.teacherArr = [
    { name: 'Sanskrit', code: 'NY' },
    { name: 'Modern', code: 'RM' },]
    
    this.noTeacherArr = [
    { name: '1', code: 'NY' },
    { name: '2', code: 'RM' },
    { name: '3', code: 'NY' },
    { name: '4', code: 'RM' },
    { name: '5', code: 'NY' },
    { name: '6', code: 'RM' },
    { name: '7', code: 'NY' },
    { name: '8', code: 'RM' },
    { name: '9', code: 'NY' },
    { name: '10', code: 'RM' },
    { name: '11', code: 'NY' },
    { name: '12', code: 'RM' },
    { name: '13', code: 'NY' },
    { name: '14', code: 'RM' },
    { name: '15', code: 'NY' },
    { name: '16', code: 'RM' },
    { name: '17', code: 'NY' },
    { name: '18', code: 'RM' },
    { name: '19', code: 'RM' },
    { name: '20', code: 'RM' },]

  }


  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
