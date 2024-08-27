import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { CustomValidation } from '../../../../utils/custom-validation';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../../../services/common.service';
import { ToasterService } from '../../../../services/toaster.service';

@Component({
  selector: 'app-bank-detail',
  standalone: true,
  imports: [PrimengModule,ReactiveFormsModule,FormsModule],
  templateUrl: './bank-detail.component.html',
  styleUrl: './bank-detail.component.scss',
  providers:[ToasterService,CommonService]
})
export class BankDetailComponent implements OnInit {
  cities:any;
  selectedCity:any;
  userType:any;
  isStudent:boolean = false;
  activeTab: number = 0;
  presentClassPHD:boolean = false

  bankDetailForm!:FormGroup;
  isSubmitted: boolean=false;
  constructor(private fb: FormBuilder,private toasterService:ToasterService,public common:CommonService){}
  ngOnInit() {
    this.cities = [
      { name: 'PHD', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.userType = [
      { name: 'Students', code: 'S' },
      { name: 'Other', code: 'O' },
    ];
    this.createForm();
  }
  createForm() {
    this.bankDetailForm = this.fb.group({
      name: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      accountNumber: ['', [Validators.required,CustomValidation.accountNumber]],
      branchName: ['', [Validators.required, CustomValidation.IsText]],
      IFSCCode: ['', [Validators.required,CustomValidation.ifscCode]],
      bankAddress: ['',[Validators.required,CustomValidation.isAddressValid]],
    });
  }
  errorHandling(controlName: string, errorName: string) {
    return this.bankDetailForm.controls[controlName].hasError(errorName);
  }
  submit() {
    if (this.bankDetailForm.invalid) {
      this.toasterService.showError("Please Enter the required Fields");
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      console.log(this.bankDetailForm.value);

    }
  }
  reset(){
    this.bankDetailForm.reset();
  }

}
