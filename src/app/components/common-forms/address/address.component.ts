import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnInit{
  form!:FormGroup;
  constructor(private rootFormGroup:FormGroupDirective){}
  ngOnInit(): void {
    this.form =this.rootFormGroup.control
  }
  errorHandling(formName:any,groupName:any,controlName: string, errorName: string) {
    return formName.controls[groupName].controls[controlName].hasError(errorName);
  }
}
