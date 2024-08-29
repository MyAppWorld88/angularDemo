import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dynamicform',
  standalone: true,
  imports: [PrimengModule,ReactiveFormsModule,],
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DynamicformComponent implements OnInit{
  myForm!:FormGroup;
  fieldArragement=[
    {'position':1,'uniqueName':'name'},
    {'position':2,'uniqueName':'email'},
    {'position':3,'uniqueName':'gender'},
    {'position':4,'uniqueName':'dob'},
    {'position':5,'uniqueName':'mobileNumber'},
    {'position':6,'uniqueName':'country'},
    {'position':7,'uniqueName':'state'},
    {'position':8,'uniqueName':'textArea'},
    {'position':9,'uniqueName':'address'},
    {'position':10,'uniqueName':'residency'},
    {'position':11,'uniqueName':'abroadAddress'},
   
  ]
  isSubmitted: boolean=false;
  selectedFormsInput: any[]=[];
  constructor(private fb:FormBuilder,public commonservice:CommonService) { }
  ngOnInit(): void {
    this.createForm();
    this.arrangeFields();
  }
  arrangeFields(){
      this.selectedFormsInput = this.fieldArragement.map((item1:any) => {
      const match = this.commonservice.formConfig.find((item2:any) =>
         item2.uniqueName === item1.uniqueName);
      if (match) {
        match.fieldNumber=item1.position;//position;
        return match; 
      }
    });
  this.selectedFormsInput.sort((a, b) => a.fieldNumber - b.fieldNumber);
  }
  createForm(){
    this.myForm=this.fb.group({
      name:[null,Validators.required],
      country:['',Validators.required],
      textArea:[null,Validators.required],
      gender:[null,Validators.required],
      mobileNumber:[null,Validators.required],
      state:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      address:[null,Validators.required],
      residency:['indian',Validators.required],
      abroadAddress:[],
      dob:[null,Validators.required],
    })
  }
  errorHandling(formName:any,controlName: string, errorName: string) {
    return formName.controls[controlName].hasError(errorName);
  }
  submit(){
    if (this.myForm.invalid) {
      // this.sharedService.showValidationMessage("Please Enter the required Fields");
      this.isSubmitted = true;
      } else {
        console.log(this.myForm.value)
      }
  }
  getStates(event:any){
    if (event.value == 'india') {
      this.commonservice.formConfig.forEach(ele => {
        if (ele.label == 'State') {
          ele.options = [
            { value: '', label: 'State Country' },
            { value: 'delhi', label: 'Delhi' },
            { value: 'mumbai', label: 'Mumbai' },

          ]
        }
      });
    }
    if (event.value == 'usa') {
      this.commonservice.formConfig.forEach(ele => {
        if (ele.label == 'State') {
          ele.options = [
            { value: '', label: 'State Country' },
            { value: 'newyork', label: 'New York' },
            { value: 'lasvegas', label: 'Las Vegas' },

          ]
        }
      });
    }
    if (event.value == 'canada') {
      this.commonservice.formConfig.forEach(ele => {
        if (ele.label == 'State') {
          ele.options = [
            { value: '', label: 'State Country' },
            { value: 'toronto', label: 'Toronto' },
            { value: 'ottawa', label: 'Ottawa' },

          ]
        }
      });
    }

  }
  checkAbroadAddr(event: any) {
    if (event == 'abroad') {
      this.myForm.get('abroadAddress')?.setValidators([Validators.required]);
      this.myForm.get('abroadAddress')?.updateValueAndValidity();
    } else {
      this.myForm.get('abroadAddress')?.setValue(null)
      this.myForm.get('abroadAddress')?.setValidators(null);
      this.myForm.get('abroadAddress')?.updateValueAndValidity();
    }
    this.commonservice.formConfig.forEach((ele) => {
      if (ele.formControlName == 'abroadAddress' && event == 'abroad') {
        ele.visibility = true;
      }
      if (ele.formControlName == 'abroadAddress' && event == 'indian') {
        ele.visibility = false;
      }
    })
  }
  reset(){
   this.myForm.reset();
   this.isSubmitted=false;
  }



}
