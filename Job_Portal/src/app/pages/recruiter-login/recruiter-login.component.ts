import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent implements OnInit {

  loginFormRecruiter: FormGroup;
  hasFormErrors = false;
  constructor(private _formBuilder: FormBuilder, 
              private router:Router, 
              private loginService: LoginService,
              private sessionStore: SessionStorageService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.loginFormRecruiter = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
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
        this.toastrService.error('Invalid Username or Password', 'Major Error', {
          timeOut: 2000,
        });
        }else{
          this.toastrService.success('Login Successful','Success', {
            timeOut: 2000,
          });
          const responseObj=res['data'];
        // localStorage.setItem('macrax-token',responseObj.token);
        // localStorage.setItem('macrax-emailId',responseObj.userName);
          //localStorage.setItem('macrax-password',this.loginFormRecruiter.value.password);
          localStorage.setItem('macrax-userId',responseObj.uid);
          localStorage.setItem('role','1');
          this.sessionStore.store('macrax-token',responseObj.token);
          this.sessionStore.store('macrax-emailId',responseObj.userName);
          //this.sessionStore.store('macrax-password',this.loginFormJobSeeker.value.password);
          this.sessionStore.store('macrax-userId',responseObj.uid);
          this.sessionStore.store('role','1');
            
          if(responseObj.IsOnboard==0){
            this.router.navigateByUrl('/dashboard/recruiter-profilereg')
          }else{
            this.router.navigateByUrl('/dashboard/home')
            //this.router.navigateByUrl('/dashboard/recruiter-profilereg')
          }
    }
    }, err => {
      console.log(err)
      this.toastrService.error('Login Failed', 'Major Error', {
        timeOut: 3000,
      });
    })
  }
}
