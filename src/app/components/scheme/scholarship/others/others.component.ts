import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonService } from '../../../../services/common.service';
import { ToasterService } from '../../../../services/toaster.service';
import { CustomValidation } from '../../../../utils/custom-validation';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [PrimengModule, FormsModule, ReactiveFormsModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss',
  providers:[ToasterService,CommonService]
})
export class OthersComponent implements OnInit{
  percentDone: any;
  uploadSuccess: any;
  uploadedFiles: any[] = [];
  uploadedPhotoFile: any[] = [];
  uploadedSignatureFile: any[] = [];

  fileName:any;
  fileNamePhoto:any;
  fileNameSignature:any;
  isSubmitted=false;
  formData:any;

  otherDetailForm!:FormGroup;
  previewPhoto: any;
  previewSignature: any;
  constructor(private fb: FormBuilder,private toasterService:ToasterService,public common:CommonService){}
  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.otherDetailForm = this.fb.group({
      uploadPhoto: ['', [Validators.required]],
      uploadSignature: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      annualIncome: ['', [Validators.required]],
      uploadCertification: ['',[Validators.required]],
    });
  }
  onUpload(event:any,type:any) {
    if(type===1){//for Photo
      this.uploadedPhotoFile=[];
      if(event.target.files[0]){
        this.uploadedPhotoFile.push(event.target.files[0]);
      }
       this.fileNamePhoto=this.uploadedPhotoFile[0].name;
       this.previewPhoto = '';

       const reader = new FileReader();
       reader.onload = (e: any) => {
         this.previewPhoto = e.target.result;
       };
 
       reader.readAsDataURL(this.uploadedPhotoFile[0]);
       if(this.uploadedPhotoFile.length>0){
        this.otherDetailForm.controls['uploadPhoto'].setValidators(null);
        this.otherDetailForm.controls['uploadPhoto'].updateValueAndValidity();
      }
    }
    if(type===2){//Signature
      this.uploadedSignatureFile=[];
      for(let file of event.target.files) {
        this.uploadedSignatureFile.push(file);
       }
       this.fileNameSignature=this.uploadedSignatureFile[0].name;
       this.previewSignature = '';

 
       const reader = new FileReader();
       reader.onload = (e: any) => {
         this.previewSignature = e.target.result;
       };
 
       reader.readAsDataURL(this.uploadedSignatureFile[0]);
       if(this.uploadedSignatureFile.length>0){
         this.otherDetailForm.controls['uploadSignature'].setValidators(null);
         this.otherDetailForm.controls['uploadSignature'].updateValueAndValidity();
       }
    }
    if(type==3){//certification
      this.uploadedFiles=[];
      for(let file of event.target.files) {
          this.uploadedFiles.push(file);
      }
      this.fileName=this.uploadedFiles[0].name;
      if(this.uploadedFiles.length>0){
        this.otherDetailForm.controls['uploadCertification'].setValidators(null);
        this.otherDetailForm.controls['uploadCertification'].updateValueAndValidity();
      }
    }

  }
  errorHandling(controlName: string, errorName: string) {
    return this.otherDetailForm.controls[controlName].hasError(errorName);
  }
  submit() {
    if (this.otherDetailForm.invalid) {
      this.toasterService.showError("Please Enter the required Fields");
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      console.log(this.otherDetailForm.value);

    }
  }
  reset(){
    this.otherDetailForm.reset();
    this.previewPhoto = '';
    this.uploadedPhotoFile=[];
    this.previewSignature = '';
    this.uploadedSignatureFile=[];
    this.uploadedFiles=[];
    this.createForm();
  }

}
