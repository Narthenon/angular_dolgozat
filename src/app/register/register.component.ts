/*
 * File: register.component.ts
 * Author: Barabás Gergő
 * Copyright: 2022, Narthenon
 * Group: Szoft N/2
 * Date: 2022-02-24
 * Github: https://github.com/Narthenon/
 * Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      user: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9öüóőúéáűÖÜÓŐÚÉÁŰ]+')]),
      pass: new FormControl('', Validators.required),
      pass2: new FormControl('', Validators.required)
    });
  }
  register(){
    let mail = this.registerForm.value.mail;
    let user = this.registerForm.value.user;
    let pass = this.registerForm.value.pass;
    let pass2 = this.registerForm.value.pass2;

    this.auth.register(mail, user, pass, pass2)
    .subscribe(res => {
      console.log(res);
      if (res.success) {
        alert("Sikeres regisztráció!");
        this.router.navigate(['login']);
      }else{
        alert("A regisztráció sikertelen!");
      }
    })
  }
  loginpage(){
    this.router.navigate(['login']);
  }
}