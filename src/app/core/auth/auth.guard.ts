import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  setTimeout(() => {
    router.navigate(['/login']);
  }, 1000);
  alert("You aren't an authorised user to see this page");
  return false;
};
