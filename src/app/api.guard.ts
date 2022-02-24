/*
 * File: api.guad.ts
 * Author: Barabás Gergő
 * Copyright: 2022, Narthenon
 * Group: Szoft N/2
 * Date: 2022-02-24
 * Github: https://github.com/Narthenon/
 * Licenc: GNU GPL
*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
