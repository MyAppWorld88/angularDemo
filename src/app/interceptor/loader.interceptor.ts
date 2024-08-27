import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next:any) => {
  const loadingService = inject(LoaderService);
  loadingService.show();
  return next.handle(req).pipe(
    finalize(() => loadingService.hide()),
  );
  // return next(req);
};
