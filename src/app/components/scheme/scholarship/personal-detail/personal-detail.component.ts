import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToasterService } from '../../../../services/toaster.service';
import { CustomValidation } from '../../../../utils/custom-validation';
import { CommonService } from '../../../../services/common.service';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-personal-detail',
  standalone: true,
  imports: [PrimengModule, ReactiveFormsModule, FormsModule],
  templateUrl: './personal-detail.component.html',
  styleUrl: './personal-detail.component.scss',
  providers: [ToasterService, CommonService]
})
export class PersonalDetailComponent {
  percentDone: any;
  uploadSuccess: any;


  personalDetailForm!: FormGroup;
  cities: any;
  selectedCity: any;
  userType: any;
  isStudent: boolean = false;
  activeTab: number = 0;
  presentClassPHD: boolean = false;
  isSubmitted = false;
  gender: any = [{ key: 'Male', value: 'Male' }, { key: 'Female', value: 'Female' }];
  categories: any = [{ name: 'PHD', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }];
  states: any = [{ state: 'Delhi', stateCode: 'Del' },
  { state: 'Mumbai', stateCode: 'mum' },
  { state: 'Goa', stateCode: 'goa' },
  { state: 'Uttar Pradesh', stateCode: 'UP' },
  { state: 'Bihar', stateCode: 'BH' }];
  districts: any = [{ districtName: 'North East', distictCode: '7' },
  { districtName: 'East', distictCode: '6' },
  { districtName: 'West', distictCode: '5' },
  { districtName: 'North West', distictCode: '4' },
  { districtName: 'South', distictCode: '3' }];
  subDistricts: any = [{ districtName: 'North East', distictCode: '7' },
  { districtName: 'East', distictCode: '6' },
  { districtName: 'West', distictCode: '5' },
  { districtName: 'North West', distictCode: '4' },
  { districtName: 'South', distictCode: '3' }];
  block: any = [];
  uploadedFiles: any[] = [];
  formData: any;
  fileName: any;
  constructor(private fb: FormBuilder, private toasterService: ToasterService, public common: CommonService) { }

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
    this.personalDetailForm = this.fb.group({
      name: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      fatherName: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      motherName: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      dob: ['1/1/2006', Validators.required],
      gender: ['', Validators.required],
      category: ['', Validators.required],
      uploadCertification: ['', Validators.required],
      email: ['', [Validators.required, CustomValidation.invalidEmail]],
      mobile: ['', [Validators.required, CustomValidation.mobileNumber]],
      institutionName: ['', Validators.required],

      permanentAddressSameAsCorrespondence:[''],
      
      state: ['', Validators.required],
      district: ['', Validators.required],
      subDistrict: ['', Validators.required],
      block: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      fullAddress: ['', [Validators.required, CustomValidation.isAddressValid]],
      occupation: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      annualIncome: ['', [Validators.required, CustomValidation.onlyNumber]],
    });
  }
  errorHandling(controlName: string, errorName: string) {
    return this.personalDetailForm.controls[controlName].hasError(errorName);
  }

  onUpload(event: any) {
    console.log(event.target.files)
    this.uploadedFiles = [];
    for (let file of event.target.files) {
      this.uploadedFiles.push(file);
    }
    this.fileName = this.uploadedFiles[0].name;
    if (this.uploadedFiles.length > 0) {
      this.personalDetailForm.controls['uploadCertification'].setValidators(null);
      this.personalDetailForm.controls['uploadCertification'].updateValueAndValidity();
    }
  }
  submit() {
    if (this.personalDetailForm.invalid) {
      this.toasterService.showError("Please Enter the required Fields");
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      console.log(this.personalDetailForm.value);
      console.log(this.uploadedFiles.length);
      this.formData = new FormData();
      if (this.uploadedFiles.length) {
        this.uploadedFiles.forEach((file) => {
          this.formData.append('file', file, file.name);
        })
      }

    }
  }
  restForm() {
    this.isSubmitted = false;
    this.personalDetailForm.reset();
    this.createForm();
  }


}
