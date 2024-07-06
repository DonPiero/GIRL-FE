import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, throwError, timeout} from "rxjs";

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    timeout(1000000),
    catchError(err => {
      if (err.name === 'TimeoutError') {
        console.error('Request timed out');
      }
      return throwError(err);
    })
  );
};
