import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormRecruiter: FormGroup;
  loginFormJobSeeker: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormRecruiter = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      termsAndCondtions: ['', Validators.required]
    });
    this.loginFormJobSeeker = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      termsAndCondtions: ['', Validators.required]
    });
  }






  
}

