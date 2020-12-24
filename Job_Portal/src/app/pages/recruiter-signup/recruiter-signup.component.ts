import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { Constants } from 'src/app/api-url';
import { LoginService } from 'src/app/services/login.service';
import { SmsService } from 'src/app/services/sms.service';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-recruiter-signup',
  templateUrl: './recruiter-signup.component.html',
  styleUrls: ['./recruiter-signup.component.css']
})
export class RecruiterSignupComponent implements OnInit {

  recruiterRegister: FormGroup;
	hasFormErrors = false;
  constructor(private _formBuilder: FormBuilder,
    private jobseekerService:JobSeekerService,
    private router:Router,
    private loginService:LoginService, 
    private smsService:SmsService,
    private sessionStore: SessionStorageService) { }

  ngOnInit() {
    this.createFormRecruiter();
  }



  createFormRecruiter(){
    this.recruiterRegister = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      mobileNo: ['', ''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      otp: ['', Validators.required],
      privacyPolicies: ['true', Validators.required],
    });
  }


prepareUser():UserModel{

		const controls = this.recruiterRegister.controls;
		const _user = new UserModel();
    _user.userName = controls.userName.value;
    _user.password =controls.password.value;
    _user.mobileNo =controls.mobileNo.value;
    _user.role =Constants.Roles.Recuriter;
    _user.otp = controls.otp.value;
    return _user;

}
isControlInvalid(controlName: string): boolean {
  const control = this.recruiterRegister.controls[controlName];
  const result = control.invalid && control.touched;
  return result;
}
onSubmit() {
  this.hasFormErrors = false;
  const controls = this.recruiterRegister.controls;
  /** check form */
  if (this.recruiterRegister.invalid) {
    Object.keys(controls).forEach(controlName =>
      controls[controlName].markAsTouched()
    );

    this.hasFormErrors = true;
    return;
  }
console.log(controls);
  const user = this.prepareUser();
  this.createUser(user);
}


createUser(_user: UserModel) {
 this.loginService.singUpUser(_user).subscribe(res => {
   console.log(res);
    if (!res) {
      return;
    }

    if(res.msg=="This email id is already registered with system."){
      alert(res.msg+"This email id is already registered with system. Please use another email id");
      return;
    } else if(res.msg=="Not allowed to enter personal mail."){
      
      alert(res.msg+"Not allowed to enter personal mail.");
      return;
      
      
    }else{
      alert(res.msg);
     // localStorage.setItem('macrax-emailId',res.data);
      this.sessionStore.store('macrax-emailId',res.data)
      this.router.navigateByUrl('/recruiter-login');
      // this.router.navigateByUrl('/dashboard/recruiter-profilereg')
    }
  });
}

sendOtp(){

  const controls = this.recruiterRegister.controls;
  const data={
    "expiry": 900,
    "message": "Your otp code is {code}",
    "mobile": 8459263834,
    "sender_id": "SMSInfo",
    "userName": controls.userName.value
   }
  this.smsService.sendOtp(data).subscribe(res=>{
    console.log(res);
  })
}

}
