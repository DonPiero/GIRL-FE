import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router)
  if (authService.isLoggedIn()) {
    return true; // Allow navigation
  } else {
    router.navigate(['/authentication']); // Redirect to login page
    return false; // Block navigation
  }
};
