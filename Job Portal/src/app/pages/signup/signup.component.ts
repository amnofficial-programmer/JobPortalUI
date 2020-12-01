import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  jobSeekerRegister: FormGroup;
  recruiterRegister: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.jobSeekerRegister = this._formBuilder.group({
      emailId: ['', Validators.required],
      setPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      otp: ['', Validators.required]
    });
    this.recruiterRegister = this._formBuilder.group({
      emailId: ['', Validators.required],
      setPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      otp: ['', Validators.required]
    });
  }

}
