import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  standalone: true,
  imports: [PrimengModule,ReactiveFormsModule,],
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent implements OnInit{
  myForm!:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.myForm=this.fb.group({
      name:[],
      selectCount:[],
      textArea:[],
      floatLabelControl:[],
    })
  }
  errorHandling(formName:any,controlName: string, errorName: string) {
    return formName.controls[controlName].hasError(errorName);
  }
  submit(){

  }





}
