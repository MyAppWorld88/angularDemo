import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { CommonFormsModule } from '../../common-forms/common-forms.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [PrimengModule,CommonFormsModule,ReactiveFormsModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.scss',
})
export class MyformComponent implements OnInit{
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
  myForm!:FormGroup;
  isSubmitted: boolean=false;
  eventsSubject: Subject<void> = new Subject<void>();
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
   this.emitEventToChild();
   this.markAllAsTouched(this.myForm);
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
  emitEventToChild() {
    this.eventsSubject.next();
  }
  private markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control:any = formGroup.get(field);
      control.markAsTouched();
    });
  }
}
