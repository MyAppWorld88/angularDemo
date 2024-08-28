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
      isRequired:'required'
    },
    {
      fieldNumber:2,
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
      isRequired:'required'
    },
    {
      fieldNumber:3,
      type: 'textarea',
      label: 'Tell me about yourself',
      formControlName: 'textArea',
      value: '',
      isRequired:'required'
    },
    {
      fieldNumber:4,
      type: 'text',
      label: 'Mobile Number',
      formControlName: 'mobileNumber',
      placeholder: 'Enter your Mobile Number',
      value: '',
      isRequired:'required'
    },
    {
      fieldNumber:5,
      type: 'radio',
      label: 'Select Gender',
      formControlName: 'gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      value: '',
      isRequired:'required'
    },
    {
      fieldNumber:6,
      type: 'select',
      label: 'State',
      formControlName: 'state',
      options: [
        { value: '', label: 'State Country' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'mumbai', label: 'Mumbai' },

      ],
      value: '',
      isRequired:'required'
    },

  ];
  isSubmitted: boolean=false;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.myForm=this.fb.group({
      name:[null,Validators.required],
      country:['',Validators.required],
      textArea:[null,Validators.required],
      gender:[null,Validators.required],
      mobileNumber:[null,Validators.required],
      state:[null,Validators.required],
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





}
