import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddusserComponent } from './addusser/addusser.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<AddusserComponent> {

  canDeactivate(component: AddusserComponent){

    if(component.userName.dirty){
      return window.confirm('you have unsaved changes. Are you sure want to navigate?');
    } else{
      return true;
    }
  }
  
}
