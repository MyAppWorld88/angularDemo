import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidation } from '../../../../utils/custom-validation';
import { CommonService } from '../../../../services/common.service';
import { ToasterService } from '../../../../services/toaster.service';

@Component({
  selector: 'app-examination-scholarship',
  standalone: true,
  imports: [PrimengModule, ReactiveFormsModule, FormsModule],
  templateUrl: './examination-scholarship.component.html',
  styleUrl: './examination-scholarship.component.scss',
  providers: [ToasterService, CommonService]
})
export class ExaminationScholarshipComponent implements OnInit {
  selectedCity: any;
  userType: any;
  isStudent: boolean = false;
  activeTab: number = 0;
  presentClassPHD: boolean = false
  percentDone: any;
  uploadSuccess: any;
  isPercentage: any = true;

  examScholarship!: FormGroup;
  isSubmitted = false;

  uploadedFiles: any[] = [];
  uploadedProgressReport: any[] = [];
  formData: any;
  fileName: any;
  fileNameProgReport: any;

  yearOfPassing: any = [{ year: '2001' }, { year: '2002' }, { year: '2003' }, { year: '2004' }];
  percentage: any = [{ name: 'Percentage', code: '1' }, { name: 'Grade', code: '2' }];
  streams = [{ name: 'Modern', code: '1' }, { name: 'Traditional', code: '2' }];
  degree = [{ name: 'PHD', code: 'NY' }, { name: 'M.A', code: 'RM' }, { name: 'B.A', code: 'LDN' }];
  presentClassYear = [{ year: '2001' }, { year: '2002' }, { year: '2003' }, { year: '2004' }];
  preview: any;
  currentFile: any;
  constructor(private fb: FormBuilder, private toasterService: ToasterService, public common: CommonService) { }
  ngOnInit() {

    this.userType = [
      { name: 'Students', code: 'S' },
      { name: 'Other', code: 'O' },
    ];
    this.createForm();
  }
  createForm() {
    this.examScholarship = this.fb.group({
      nameOfLastQualifyExam: ['', [Validators.required, CustomValidation.IsTextWithDot]],
      rollNumber: ['', [Validators.required, CustomValidation.rollNumber]],
      passingYear: ['', [Validators.required]],
      percentageOrGrade: [{ name: 'Percentage', code: '1' }, Validators.required],

      percentageInSanskriti: [''],
      overAllPercentageInSans: [''],

      oGrade: [''],
      oCgpa: [''],
      oMarks: [''],
      oPercentage: [''],

      sGrade: [''],
      sCGPA: [''],
      sMarks: [''],
      sPercentage: [''],

      uploadCertification: ['', Validators.required],

      studIdCard: [''],
      optionalSubject: [''],
      stream: [''],
      presentClass: [''],
      presentClassYear: [''],

      registredInPhd: [''],
      registrationNo: [''],
      dateOfReg: [''],
      progressReportUpload: [''],

      availingScholarship: [''],
      scholarshipAmount: [''],
      scholarshipSource: [''],
      scholarshipFrom: [''],
      scholarshipTo: [''],
      obtainedYearsOrMonths: [''],

      subjectOfPresentClass: this.fb.array([]),

    });
    this.AddNewSubjecttoPresentClass();
    this.AddNewSubjecttoPresentClass();
    this.AddNewSubjecttoPresentClass();
  }

  // ******* Start Add New Subject to Present Class***********
  get subjectOfPresentClass() {
    return this.examScholarship.get('subjectOfPresentClass') as FormArray;
  }
  addSubjectToPresentClass(data?: any) {
    if (data) {
      this.subjectOfPresentClass.push(this.fillSubjectsToPresentClass(data));
    } else {
      this.AddNewSubjecttoPresentClass();
    }
  }
  fillSubjectsToPresentClass(data: any) {
    return this.fb.control('');
  }
  AddNewSubjecttoPresentClass() {
    const subject = new FormControl('');
    if (this.subjectOfPresentClass.length < 10) {
      this.subjectOfPresentClass.push(subject);
    }

  }
  deleteSubject() {
    if (this.subjectOfPresentClass.length > 3) {
      this.subjectOfPresentClass.removeAt(this.subjectOfPresentClass.length - 1);
    }
  }
  returnAlphabet(i: any) {
    return String.fromCharCode(i);
  }
  // ******* End Add New Subject to Present Class***********


  selectClass(event: any) {
    // console.log('event.value.name', event.value.name)
    if (event.value.name == 'PHD') {
      console.log('1')
      this.presentClassPHD = true
    }
    else {
      this.presentClassPHD = false
    }

  }

  percentageFnc(event: any) {
    if (event.value.name == 'Percentage') {
      this.isPercentage = true;
    }
    else {
      this.isPercentage = false
    }
  }
  submit() {
    console.log(this.examScholarship);
    if (this.examScholarship.invalid) {
      this.toasterService.showError("Please Enter the required Fields");
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      console.log(this.examScholarship.value);
      console.log(this.uploadedFiles.length);
      this.formData = new FormData();
      if (this.uploadedFiles.length) {
        this.uploadedFiles.forEach((file) => {
          this.formData.append('file', file, file.name);
        })
      }

    }
  }
  onUpload(event: any, type: any) {
    type === '1' ? this.uploadedFiles = [] : this.uploadedProgressReport = [];
    for (let file of event.target.files) {
      type === '1' ? this.uploadedFiles.push(file) : this.uploadedProgressReport.push(file);
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        //  console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);
    }
    type === '1' ? this.fileName = this.uploadedFiles[0].name : this.fileNameProgReport = this.uploadedProgressReport[0].name;

    if (this.uploadedFiles.length > 0 && type === '') {
      this.examScholarship.controls['uploadCertification'].setValidators(null);
      this.examScholarship.controls['uploadCertification'].updateValueAndValidity();
    }
    if (this.uploadedProgressReport.length > 0 && type === '2') {
      this.examScholarship.controls['progressReportUpload'].setValidators(null);
      this.examScholarship.controls['progressReportUpload'].updateValueAndValidity();
    }
  }


}
