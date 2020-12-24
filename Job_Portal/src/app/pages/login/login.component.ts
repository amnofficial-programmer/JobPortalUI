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
      userName: ['',  Validators.compose([	Validators.required,	Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['', Validators.required],
      termsAndCondtions: ['', Validators.required]
    });
    this.loginFormJobSeeker = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      termsAndCondtions: ['', Validators.required]
    });
  }

  get f() {
     if(this.loginFormRecruiter){
      return this.loginFormRecruiter.controls; 
     }else if(this.loginFormJobSeeker){
      return this.loginFormJobSeeker.controls; 
     }else{
       return null;
     }
     
    }





  
}

