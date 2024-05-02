import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ) => {
    if(inject(AuthService).isAuthenticated()) {
      return true;
    } else {
      return inject(Router).createUrlTree(['/auth/sign-in']);
    }
};
