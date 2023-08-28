import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }

  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 
  loginform = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),

  })
  login() {
    this.router.navigate(['/right']);
    console.log(this.loginform.value);
  }


}
