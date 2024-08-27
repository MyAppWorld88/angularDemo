import { AbstractControl, FormControl, FormGroupDirective, NgForm } from "@angular/forms";


export class CustomValidation {
  //Only Name with dot(.) and white space allowed Ex V.K sharma
    static IsTextWithDot(control: AbstractControl) {
      let val = control.value;
      if (val === null || val === '') return null;

      const regularExpression = /^[a-zA-Z. ]*$/
      if (!val.match(regularExpression)) {
        return { 'textFieldWithDot': true }
      }
      return null;
    }
    //Only Name white space allowed Ex:- ankit kumar
    static IsText(control: AbstractControl) {
      let val = control.value;
      if (val === null || val === '') return null;

      const regularExpression = /^[a-zA-Z. ]*$/
      if (!val.match(regularExpression)) {
        return { 'onlytext': true }
      }
      return null;
    }
    static mobileNumber(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
        if (!val.toString().match(/^[6-9]\d{9}$/)) return { 'invalidMobileNumber': true };
        return null;
      }

      static invalidEmail(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
    
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!val.match(regularExpression)) {
          return { 'notEmail': true }
        }
        return false;
      }

      static password(control: AbstractControl) {
        let val = control.value;
        const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/
        if (val === null || val === '')
          return null;
        if (!val.match(regularExpression)) {
          return { 'isPassword': true }
        }
        return false;
      }
      static whiteSpaceValidator(control:AbstractControl)
      {
        let val=String(control.value);
        if(val.includes(' '))
        {
          return {whiteSpace:true};
        }
        return null;
      }
      static isAddressValid(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
    
        const regularExpression = /^[a-zA-Z0-9\s\n!@#$&%()*^`_;:|.+,/"'-]*$/
        if (!val.match(regularExpression)) {
          return { 'textField1': true }
        }
        return null;
      }
      //contains only number
      static onlyNumber(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
        const regularExpression = /^[\d]+$/
        if (!val.match(regularExpression)) {
          return { 'numberOnly': true }
        }
        return null;
      }
      //Roll Number
      static rollNumber(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
        const regularExpression = /^[0-9]{6}$/
        if (!val.match(regularExpression)) {
          return { 'numberOnly': true }
        }
        return null;
      }
      //account Number
      static accountNumber(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
        const regularExpression = /^[0-9]{11}$/
        if (!val.match(regularExpression)) {
          return { 'numberOnly': true }
        }
        return null;
      }
      //IFSC code
      static ifscCode(control: AbstractControl) {
        let val = control.value;
        if (val === null || val === '') return null;
        const regularExpression = /^[a-zA-Z]{4}\d{7}$/
        if (!val.match(regularExpression)) {
          return { 'numberOnly': true }
        }
        return null;
      }
}