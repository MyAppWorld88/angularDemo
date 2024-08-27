import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: false,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})

export class PersonalInfoComponent implements OnInit {
form!:FormGroup;
constructor(private rootFormGroup:FormGroupDirective){}
ngOnInit(): void {
  this.form =this.rootFormGroup.control
}
errorHandling(formName:any,groupName:any,controlName: string, errorName: string) {
  return formName.controls[groupName].controls[controlName].hasError(errorName);
}
}
