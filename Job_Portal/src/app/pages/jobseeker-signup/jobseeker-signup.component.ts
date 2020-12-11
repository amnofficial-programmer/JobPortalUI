import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/api-url';
import { SmsService } from 'src/app/services/sms.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.css']
})
export class JobseekerSignupComponent implements OnInit {

  jobSeekerRegisterForm: FormGroup;
	hasFormErrors = false;
  constructor(private _formBuilder: FormBuilder,private jobSeekerService:JobSeekerService,private router:Router,private smsService:SmsService,private loginService:LoginService) { }

  ngOnInit() {
   
    this.createFormJobSeeker();
  }


  createFormJobSeeker(){
    this.jobSeekerRegisterForm = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email])],
      mobileNo: ['', ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      otp: ['', Validators.required],
      privacyPolicies: ['true', Validators.required],
    });
  }


prepareUser():UserModel{
		const controls = this.jobSeekerRegisterForm.controls;
		const _user = new UserModel();
    _user.userName = controls.userName.value;
    _user.password =controls.password.value;
    _user.mobileNo =controls.mobileNo.value;
    _user.role =Constants.Roles.Job_Seeker;
    _user.otp = controls.otp.value;
    return _user;

}
isControlInvalid(controlName: string): boolean {
  const control = this.jobSeekerRegisterForm.controls[controlName];
  const result = control.invalid && control.touched;
  return result;
}
onSubmit() {
  debugger
  this.hasFormErrors = false;
  const controls = this.jobSeekerRegisterForm.controls;
  /** check form */
  if (this.jobSeekerRegisterForm.invalid) {
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
      alert(res.msg+"Please use another email id");
      return;
    }else{
      alert(res.msg);
      localStorage.setItem('macrax-emailId',res.data);
      this.router.navigateByUrl('/jobseeker-login');
      // this.router.navigateByUrl('/dashboard/job-seeker-profilereg')
    }
   ;
  });
}
sendOtp(){

  const controls = this.jobSeekerRegisterForm.controls;
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
