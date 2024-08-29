import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../utils/api-constant';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    formConfig: any[] = [
    {
      fieldNumber:1,
      uniqueName:'name',
      type: 'text',
      label: 'Name',
      formControlName: 'name',
      placeholder: 'Enter your name',
      value: '',
      isRequired:'required',
      errorMessage:'Please Enter Your Name',
      maxValue:30,
      visibility:true,
    },
    {
      fieldNumber:4,
      uniqueName:'country',
      type: 'select',
      label: 'Country',
      formControlName: 'country',
      options: [
        { value: '', label: 'Select Country' },
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'india', label: 'India' }
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please Select Country',
      visibility:true,
    },
    {
      fieldNumber:5,
      uniqueName:'state',
      type: 'select',
      label: 'State',
      formControlName: 'state',
      options: [],
      value: '',
      isRequired:'required',
      errorMessage:'Please Select State',
      visibility:true,
    },
    {
      fieldNumber:6,
      uniqueName:'textArea',
      type: 'textarea',
      label: 'Tell me about yourself',
      formControlName: 'textArea',
      value: '',
      isRequired:'required',
      errorMessage:'Please write about your self',
      visibility:true,
    },
    {
      fieldNumber:3,
      uniqueName:'mobileNumber',
      type: 'text',
      label: 'Mobile Number',
      formControlName: 'mobileNumber',
      placeholder: 'Enter your Mobile Number',
      value: '',
      isRequired:'required',
      errorMessage:'Please Enter Mobile Number',
      maxValue:10,
      visibility:true,
    },
    {
      fieldNumber:2,
      uniqueName:'gender',
      type: 'radio',
      label: 'Select Gender',
      formControlName: 'gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please select gender',
      visibility:true,
    },
    {
      fieldNumber:2,
      uniqueName:'residency',
      type: 'radio',
      label: 'Select Residency',
      formControlName: 'residency',
      width:"col-md-12",
      options: [
        { value: 'indian', label: 'Indian' },
        { value: 'abroad', label: 'Abroad' },
      ],
      value: '',
      isRequired:'required',
      errorMessage:'Please select gender',
      visibility:true,
    },
    {
      fieldNumber:2,
      uniqueName:'email',
      type: 'text',
      label: 'Email',
      formControlName: 'email',
      value: '',
      isRequired:'required',
      emailValidation:'email',
      errorMessage:'Please select email',
      errorMessageEmail:'Please enter valid email',
      visibility:true,
    },
    {
      fieldNumber:2,
      uniqueName:'abroadAddress',
      type: 'textarea',
      label: 'Aboard Address',
      formControlName: 'abroadAddress',
      value: '',
      isRequired:'required',
      errorMessage:'Please enter abroad address',
      visibility:false,
    },
    {
      fieldNumber:2,
      uniqueName:'address',
      type: 'textarea',
      label: 'Address',
      formControlName: 'address',
      value: '',
      isRequired:'required',
      errorMessage:'Please enter address',
      visibility:true,
    },
    {
      fieldNumber:2,
      uniqueName:'dob',
      type: 'date',
      label: 'Select D.O.B',
      formControlName: 'dob',
      value: '',
      isRequired:'required',
      errorMessage:'Please Select Date',
      visibility:true,
    },

  ];
  public recordsPerPage=10;
  numberOnly: any;
  mySubject = new BehaviorSubject<any>({});
  getSubject = this.mySubject.asObservable()
  constructor(private http: HttpClient) { }
  logout(data: any) {
    const url = environment.baseUrl + API_PATH.LOGOUT_API;
    return this.http.post(url, data);
  }
  login(data:any){
    const url = environment.baseUrl + API_PATH.LOGIN_API;
    return this.http.post(url, data);
  }
  isLoggedIn(){
    return true;
  }
  public isInteger(evt: any) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.numberOnly = true;
      return false;
    }
    this.numberOnly = false;
    return true;
  }


saveData(val:any){
  this.mySubject.next(val);
}


getProductsData() {
  return [
      {
          id: '1000',
          code: 'f230fh0g3',
          name: 'Bamboo Watch',
          description: 'Product Description',
          image: 'bamboo-watch.jpg',
          price: 65,
          category: 'Accessories',
          quantity: 24,
          inventoryStatus: 'INSTOCK',
          rating: 5
      },
     
      {
          id: '1009',
          code: 'cm230f032',
          name: 'Gaming Set',
          description: 'Product Description',
          image: 'gaming-set.jpg',
          price: 299,
          category: 'Electronics',
          quantity: 63,
          inventoryStatus: 'INSTOCK',
          rating: 3
      },
     
  ];
}
getProductsMini() {
  return Promise.resolve(this.getProductsData().slice(0, 5));
}
getProductsSmall() {
  return Promise.resolve(this.getProductsData().slice(0, 10));
}
getProducts() {
  return Promise.resolve(this.getProductsData());
}






}
