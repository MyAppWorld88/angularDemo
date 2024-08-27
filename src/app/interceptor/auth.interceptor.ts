import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from '../services/toaster.service';
import { finalize, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next:any) => {
  const router = inject(Router);
  const toaster = inject(ToasterService);
  return next.handle(req).pipe(tap(event => {

  }, error => {
     
    if (error.status == 401) {
      // toaster.showError(error.error.message);
      sessionStorage.clear();
      router.navigate(["/"]);
    }
  }), finalize(() => {
    // if (this.count != 0) this.count--;
    // if (this.count == 0) this.spinner.hide()
  })
  );
};
