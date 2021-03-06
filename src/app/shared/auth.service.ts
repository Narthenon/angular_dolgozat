/*
 * File: auth.service.ts
 * Author: Barabás Gergő
 * Copyright: 2022, Narthenon
 * Group: Szoft N/2
 * Date: 2022-02-24
 * Github: https://github.com/Narthenon/
 * Licenc: GNU GPL
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = 'http://localhost:4200/';
  constructor(private http: HttpClient,private router: Router) { }

  register(mail: string, user: string, pass: string, pass2: string) {
    
    let authData = {
      email: mail,
      username: user,
      password: pass,
      confirm_password: pass2
    }
    let data = JSON.stringify(authData);

    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let header = {
      headers: headerObj
    }

    let endpoint = 'register';
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, header);
  }

  login(user: string, pass: string) {
    console.log(user)
    console.log(pass)
    
    let authData = {
      username: user,
      password: pass
    }
    let data = JSON.stringify(authData);

    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let header = {
      headers: headerObj
    }

    let endpoint = 'login';
    let url = this.host + endpoint;
    return this.http.post<any>(url, data, header);
  }
  isLoggedIn(){
    if(localStorage.getItem('currentUser') == null){
      return false;
    }
    let data:any = localStorage.getItem('currentUser');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;
    return token;
  }
  logout(){
    if(localStorage.getItem('currentUser') == null){
      return;
    }
    let data:any = localStorage.getItem('currentUser');
    localStorage.removeItem('currentUser');
    let currentUser = JSON.parse(data);
    let token = currentUser.token;

    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    let httpOption = {
      headers: headerObj
    };
    let endpoint = 'logout';
    let url = this.host + endpoint;

    return this.http.post<any>(url, '', httpOption)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['login']);
    })
  }
}