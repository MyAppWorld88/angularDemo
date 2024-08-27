import { Component } from '@angular/core';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependent-member',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './dependent-member.component.html',
  styleUrl: './dependent-member.component.scss'
})
export class DependentMemberComponent {
  uploadedFiles: any[] = [];
  formData:any;
  fileName:any;
  cities:any;
  myForm:any = FormGroup;
  rows: any[] = [""]; // This could be fetched from an API or initialized with default data

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      // Initialize form controls based on the number of rows
      rows: this.fb.array([])
    });
    this.addRows(); // Add default rows
  }

  get formRows() {
    console.log('4', this.myForm)
    return this.myForm.get('rows') as FormArray;
    
  }

  addRows() {
    console.log('3', this.rows)
    this.rows.forEach(row => {
      const rowGroup = this.fb.group({
        type: [row.type],
        participants: [row.participants],
        days: [row.days],
        hourse: [row.hourse],
        name: [row.name],
        thems: [row.thems],
        time: [row.time],
        
        // Add more form controls here based on your data structure
      });
      this.formRows.push(rowGroup);
    });
  }

  addRow() {
    console.log('1')
    this.rows.push({}); // Add an empty row to the data array
    console.log('2', this.rows)
    this.addRows(); // Add the new row to the form
  }

  editRow(index: number) {
    const row = this.rows[index];
    const rowGroup = this.formRows.at(index);
    rowGroup.patchValue(row); // Populate form fields with data from the selected row
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1); // Remove row from the data array
    this.formRows.removeAt(index); // Remove row from the form
  }




  upload(files:any){
    console.log('files', files)
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
}
