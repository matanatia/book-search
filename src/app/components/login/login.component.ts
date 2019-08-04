import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passAuth: boolean;

  constructor(private router: Router) {
    this.passAuth = true;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const pass: string = "123456";
    //check if the password correct
    let password: string = form.controls.password.value;

    if (password === pass) {
      //save user name in local storage
      localStorage.setItem('user', form.controls.userName.value);
      //clean the form search value
      form.reset();
      //redirect to home page
      this.router.navigate(["home"]);
    }
    else {
      this.passAuth = false;
    }
  }

  resetPassAuth() {
    this.passAuth = true;
  }

}
