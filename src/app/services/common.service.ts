import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../utils/api-constant';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
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
