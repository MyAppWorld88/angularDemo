import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,PrimengModule, FieldsetModule,AvatarModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  cities:any;
  selectedCity:any;
  userType:any;
  isStudent:any;
  ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    this.userType = [
      { name: 'Students', code: 'S' },
      { name: 'Individual', code: 'S' },
      { name: 'Other', code: 'O' },
  ];
}

selectUserType(event:any){
  if(event.value.name == 'Students'){
    console.log('1')
    this.isStudent = true
  }
  else{
    this.isStudent = false
  }
  
}


}
