import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  standalone: true,
  imports: [PrimengModule,ReactiveFormsModule,],
  templateUrl: './dynamicform.component.html',
  styleUrl: './dynamicform.component.scss'
})
export class DynamicformComponent implements OnInit{
  myForm!:FormGroup;
  formConfig: any[] = [
    {
      fieldNumber:1,
      type: 'text',
      label: 'Name',
      formControlName: 'name',
      placeholder: 'Enter your name',
      value: '',
      isRequired:'required',
      errorMessage:'Please Enter Your Name',
      maxValue:30,
      visibility:true,
    },
    {
      fieldNumber:4,
      type: 'select',
      label: 'Country',
      formControlName: 'country',
      options: [
        { value: '', label: 'Select Country' },
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'india', label: 'India' }
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please Select Country',
      visibility:true,
    },
    {
      fieldNumber:5,
      type: 'select',
      label: 'State',
      formControlName: 'state',
      options: [],
      value: '',
      isRequired:'required',
      errorMessage:'Please Select State',
      visibility:true,
    },
    {
      fieldNumber:6,
      type: 'textarea',
      label: 'Tell me about yourself',
      formControlName: 'textArea',
      value: '',
      isRequired:'required',
      errorMessage:'Please write about your self',
      visibility:true,
    },
    {
      fieldNumber:3,
      type: 'text',
      label: 'Mobile Number',
      formControlName: 'mobileNumber',
      placeholder: 'Enter your Mobile Number',
      value: '',
      isRequired:'required',
      errorMessage:'Please Enter Mobile Number',
      maxValue:10,
      visibility:true,
    },
    {
      fieldNumber:2,
      type: 'radio',
      label: 'Select Gender',
      formControlName: 'gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please select gender',
      visibility:true,
    },
    {
      fieldNumber:2,
      type: 'radio',
      label: 'Select Residency',
      formControlName: 'residency',
      options: [
        { value: 'indian', label: 'Indian' },
        { value: 'abroad', label: 'Abroad' },
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please select gender',
      visibility:true,
    },
    {
      fieldNumber:2,
      type: 'text',
      label: 'Email',
      formControlName: 'email',
      value: '',
      isRequired:'required',
      emailValidation:'email',
      errorMessage:'Please select email',
      errorMessageEmail:'Please enter valid email',
      visibility:true,
    },
    {
      fieldNumber:2,
      type: 'textarea',
      label: 'Aboard Address',
      formControlName: 'abroadAddress',
      value: '',
      isRequired:'required',
      errorMessage:'Please enter abroad address',
      visibility:false,
    },
    {
      fieldNumber:2,
      type: 'textarea',
      label: 'Address',
      formControlName: 'address',
      value: '',
      isRequired:'required',
      errorMessage:'Please enter address',
      visibility:true,
    },

  ];
  fieldArragement=[
    {'position':1,'formControlName':'name'},
    {'position':2,'formControlName':'email'},
    {'position':3,'formControlName':'gender'},
    {'position':4,'formControlName':'mobileNumber'},
    {'position':5,'formControlName':'country'},
    {'position':6,'formControlName':'state'},
    {'position':7,'formControlName':'textArea'},
    {'position':8,'formControlName':'address'},
    {'position':9,'formControlName':'residency'},
    {'position':10,'formControlName':'abroadAddress'},
  ]
  isSubmitted: boolean=false;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
    this.arrangeFields();
  }
  arrangeFields(){
    this.formConfig.forEach(formField=>{
      this.fieldArragement.forEach(ele=>{
        if(ele.formControlName===formField.formControlName){
          formField.fieldNumber=ele.position;
        }
      })
    })

    this.formConfig.sort((a, b) => a.fieldNumber - b.fieldNumber);
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
      abroadAddress:[]
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
      this.formConfig.forEach(ele => {
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
      this.formConfig.forEach(ele => {
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
      this.formConfig.forEach(ele => {
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
  checkAbroadAddr(event:any){
   if(event=='abroad'){
    this.myForm.get('abroadAddress')?.setValidators([Validators.required]);
    this.myForm.get('abroadAddress')?.updateValueAndValidity();
   }else{
    this.myForm.get('abroadAddress')?.setValue(null)
    this.myForm.get('abroadAddress')?.setValidators(null);
    this.myForm.get('abroadAddress')?.updateValueAndValidity();
   }
   this.formConfig.forEach((ele)=>{
    if(ele.formControlName=='abroadAddress' && event=='abroad'){
      ele.visibility=true;
    }
    if(ele.formControlName=='abroadAddress' && event=='indian'){
      ele.visibility=false;
    }
})
  }




}
