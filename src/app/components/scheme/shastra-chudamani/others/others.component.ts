import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../../../services/common.service';

interface TableRow {
    serialNo: string;
    nameOfExamination: string;
    nameOfUniversity: string;
    yearOfPassing: string;
    subjectOfSpecialization: string;
}

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent {
  uploadedFiles: any[] = [];
    formData:any;
    fileName:any;
    cities:any;
    myForm:any = FormGroup;
  selectedCity:any;
  userType:any;
  isStudent:boolean = false;
  activeTab: number = 0;
  presentClassPHD:boolean = false
  rows: TableRow[] = [];
    row: any[] = [] // This could be fetched from an API or initialized with default data
  constructor(private fb: FormBuilder, private common : CommonService) {}
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

  this.myForm = this.fb.group({
    // Initialize form controls based on the number of rows
    rows: this.fb.array([])
  });
  this.addRow(); // Add default rows
  this.getData()
}      

get formRows() {
 
  return this.myForm.get('rows') as FormArray;
  
}

// addRows() {
//   console.log('3', this.rows)
//   this.rows.forEach(row => {
//     const rowGroup = this.fb.group({
//       type: [row.type],
//       participants: [row.participants],
//       days: [row.days],
//       hourse: [row.hourse],
//       name: [row.name],
//       thems: [row.thems],
//       time: [row.time],
      
//       // Add more form controls here based on your data structure
//     });
//     this.formRows.push(rowGroup);
//   });
// }

addRow() {
  console.log('1')
  this.rows.push({
        serialNo: '',
        nameOfExamination: '',
        nameOfUniversity: '',
        yearOfPassing: '',
        subjectOfSpecialization: ''
  }); // Add an empty row to the data array
  console.log('2', this.rows)
//   this.addRows(); // Add the new row to the form
}

editRow(index: number) {
  const row = this.rows[index];
  const rowGroup = this.formRows.at(index);
  rowGroup.patchValue(row); // Populate form fields with data from the selected row
}
deleteRow(index:any) {
    this.rows.forEach(row => {
        console.log('Serial No:', row.serialNo);
        console.log('Name of Examination:', row.nameOfExamination);
        console.log('Name of University:', row.nameOfUniversity);
        console.log('Year of Passing:', row.yearOfPassing);
        console.log('Subject of Specialization:', row.subjectOfSpecialization);
    });
    console.log(this.rows)
    this.common.saveData(this.rows)
    
    if(index > 0){
    this.rows.splice(index, 1);
    this.formRows.removeAt(index);
    }
}


getData(){
  this.common.getSubject.subscribe(res =>{
    console.log('resddddd',res)
  })
}




upload(files:any){
  console.log('files', files)
  //pick from one of the 4 styles of file uploads below
  // this.uploadAndProgress(files);
}




}
