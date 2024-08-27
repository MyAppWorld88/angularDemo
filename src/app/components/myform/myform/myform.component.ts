import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CommonFormsModule } from '../../common-forms/common-forms.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [PrimengModule,CommonFormsModule,ReactiveFormsModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.scss'
})
export class MyformComponent implements OnInit{
  myForm!:FormGroup;
  isSubmitted!: boolean;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.myForm=this.fb.group({
      basicInfo:this.fb.group({
        name:[null,[Validators.required]],
        mBNumber:[],
        pincode:[],
      }),
      address:this.fb.group({
        email:[],
        address:[],
      }),

    })
  }
  submit(){

   if (this.myForm.invalid) {
    // this.sharedService.showValidationMessage("Please Enter the required Fields");
    this.isSubmitted = true;
    } else {
      console.log(this.myForm.value)
    }
  }
  // errorHandling(formName:any,groupName:any,controlName: string, errorName: string) {
  //   return formName.controls[groupName].controls[controlName].hasError(errorName);
  // }
}
