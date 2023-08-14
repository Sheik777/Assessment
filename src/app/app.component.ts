import { Component } from '@angular/core';
import {FormControl, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Assessment';

  hide = true;

  private _loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  public get loginform() {
    return this._loginform;
  }
  public set loginform(value) {
    this._loginform = value;
  }
  useronvalid: boolean = false
  constructor(private route: Router) { }
  ngOnInit(): void { }
  login() {
    if (this.loginform.controls.username.value != 'sheik' ||
      this.loginform.controls.password.value != 'sheik123') {
      this.useronvalid = true;


    } else {
      this.useronvalid = false;
      this.route.navigateByUrl('/home');
      localStorage.setItem('username', this.loginform.controls.username.value);

    }
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


}
