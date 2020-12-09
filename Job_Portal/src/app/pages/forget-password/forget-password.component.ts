import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  EmailConfirmationForm: FormGroup;
  otpConfirmation: FormGroup;
  forgetPasswordForm: FormGroup;
  hasFormErrors = false;

  ifEmailId: boolean = true;
  ifSendOtp: boolean = false;
  ifPassword: boolean = false;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {

    this.EmailConfirmationForm = this._formBuilder.group({
      emailId: ['', Validators.required],
   
    })

    this.otpConfirmation = this._formBuilder.group({

      otp: ['', Validators.required],

    })


    this.forgetPasswordForm = this._formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    })

  }



sendEmailBtnClick(){
  this.hasFormErrors = false;
  const controls = this.EmailConfirmationForm.controls;
  /** check form */
  if (this.EmailConfirmationForm.invalid) {
    Object.keys(controls).forEach(controlName =>
      controls[controlName].markAsTouched()
    );

    this.hasFormErrors = true;
    return;
  }

  this.ifEmailId=false;
  this.ifSendOtp=true;



}

otpCheckBtnClick(){
  this.hasFormErrors = false;
  const controls = this.otpConfirmation.controls;
  /** check form */
  if (this.otpConfirmation.invalid) {
    Object.keys(controls).forEach(controlName =>
      controls[controlName].markAsTouched()
    );

    this.hasFormErrors = true;
    return;
  }

  this.ifEmailId=false;
  this.ifSendOtp=false;
  this.ifPassword=true;
}


changePasswordBtnClick(){
  this.hasFormErrors = false;
  const controls = this.forgetPasswordForm.controls;
  /** check form */
  if (this.forgetPasswordForm.invalid) {
    Object.keys(controls).forEach(controlName =>
      controls[controlName].markAsTouched()
    );

    this.hasFormErrors = true;
    return;
  }
}
}
