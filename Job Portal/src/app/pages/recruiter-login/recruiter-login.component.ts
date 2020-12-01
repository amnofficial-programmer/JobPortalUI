import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent implements OnInit {

  loginFormRecruiter: FormGroup;
  hasFormErrors = false;
  constructor(private _formBuilder: FormBuilder, private router:Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginFormRecruiter = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email])],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.hasFormErrors = false;
    const controls = this.loginFormRecruiter.controls;
    /** check form */
    if (this.loginFormRecruiter.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
  
      this.hasFormErrors = true;
      return;
    }
    this.loginService.loginUser(this.loginFormRecruiter.value).subscribe(res => {
      console.log(res);
   
      if(res.msg=="Invalid Username/password!"){
        alert(res.msg);
        }else{
          alert("Login sucessfully");
      const responseObj=res['data'];
      localStorage.setItem('macrax-token',responseObj.token);
      if(responseObj.IsOnboard==0){
    this.router.navigateByUrl('/dashboard/recruiter-profilereg')

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
