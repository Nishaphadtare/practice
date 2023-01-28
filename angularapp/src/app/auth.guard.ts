import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private _route: Router){

}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
   if(localStorage.getItem('username') !=null){
    return true;
   }else {
    this._route.navigate(['/login']); //redirect to login or when we are click on product then we can redirect to the login page. e.g just like facebook,google login
    return false;
   }
  

  }
  
}
