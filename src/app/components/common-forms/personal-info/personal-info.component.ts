import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable, Subscription } from 'rxjs';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid)!;
  }
}
@Component({
  selector: 'app-personal-info',
  standalone: false,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})

export class PersonalInfoComponent implements OnInit {
form!:FormGroup;
@Input() events!: Observable<void>;
private eventsSubscription!: Subscription;
basicInfoFormGroup!:FormGroup;
  basicInfo!: FormGroup<any>;
  matcher!: MyErrorStateMatcher;
constructor(public rootFormGroup:FormGroupDirective){}
ngOnInit(): void {
  this.matcher = new MyErrorStateMatcher();
  this.form =this.rootFormGroup.control;
  console.log(this.form)
  this.eventsSubscription = this.events.subscribe(() => this.doSomething());
}
errorHandling(formName:any,groupName:any,controlName: string, errorName: string) {
  return formName.controls[groupName].controls[controlName].hasError(errorName);
}
ngOnDestroy() {
  this.eventsSubscription.unsubscribe();
}
doSomething(){
  console.log("doing something..")
 console.log(this.rootFormGroup.submitted);
 console.log((this.form.controls['basicInfo'] as FormGroup).controls['name'].hasError('required'));
}






}
