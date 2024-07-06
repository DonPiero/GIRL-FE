import { HttpInterceptorFn } from '@angular/common/http';
import {AuthenticationService} from "../services/authentication.service";
import {inject} from "@angular/core";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);
  const token = authService.getToken();

  if (!req.url.includes("signup") && !req.url.includes("signin")) {
    console.log('Adding JWT token to request:', token);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
