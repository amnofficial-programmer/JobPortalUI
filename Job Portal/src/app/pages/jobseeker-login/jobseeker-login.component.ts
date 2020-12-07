import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {

  loginFormJobSeeker: FormGroup;
  hasFormErrors = false;
  constructor(private _formBuilder: FormBuilder, private router:Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginFormJobSeeker = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email])],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    this.hasFormErrors = false;
    const controls = this.loginFormJobSeeker.controls;
    /** check form */
    if (this.loginFormJobSeeker.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
  
      this.hasFormErrors = true;
      return;
    }

    this.loginService.loginUser(this.loginFormJobSeeker.value).subscribe(res => {
      console.log(res);
     

       
      if(res.msg=="Invalid Username/password!"){
        alert(res.msg);
        }else{
          alert("Login sucessfully");
        const responseObj=res['data'];
        localStorage.setItem('macrax-token',responseObj.token);
        localStorage.setItem('macrax-emailId',responseObj.userName);
        localStorage.setItem('role','0');
        if(responseObj.IsOnboard==0){
          this.router.navigateByUrl('/dashboard/job-seeker-profilereg')
        }else{
          this.router.navigateByUrl('/dashboard/home')
        }
    }
      
    }, err => {
      console.log(err)
      alert("Login Filed")
    })

  }


}
