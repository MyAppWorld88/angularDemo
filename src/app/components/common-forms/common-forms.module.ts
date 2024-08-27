import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonFormsRoutingModule } from './common-forms-routing.module';
import { AddressComponent } from './address/address.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng/primeng.module';


@NgModule({
  declarations: [AddressComponent,PersonalInfoComponent],
  imports: [
    CommonModule,
    CommonFormsRoutingModule,ReactiveFormsModule,FormsModule,PrimengModule
  ],
  exports:[AddressComponent,PersonalInfoComponent]
})
export class CommonFormsModule { }
