import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import { MacraxModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {

  loginFormJobSeeker: FormGroup
  hasFormErrors = false
  errorMessage = ''

  constructor(private _formBuilder: FormBuilder, 
              private router:Router,
              private loginService: LoginService,
              private sessionStore: SessionStorageService,
              private modalService: MacraxModalService,
              private toastrService: ToastrService) { 
                this.errorMessage = '';
              }

  ngOnInit() {
    this.loginFormJobSeeker = this._formBuilder.group({
      userName: ['', Validators.compose([	Validators.required,	Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
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
      if(res.msg=="Invalid Username/password!"){
          this.toastrService.error('Invalid Username or Password', 'Major Error', {
            timeOut: 2000,
          });
        }else{
          this.toastrService.success('Login Successful', 'Success', {
            timeOut: 2000,
          });
        const responseObj=res['data'];
        //localStorage.setItem('macrax-token',responseObj.token);
        //localStorage.setItem('macrax-emailId',responseObj.userName);
        localStorage.setItem('role','0');
        this.sessionStore.store('macrax-token',responseObj.token);
        this.sessionStore.store('macrax-emailId',responseObj.userName);
        //this.sessionStore.store('macrax-password',this.loginFormJobSeeker.value.password);
        this.sessionStore.store('macrax-userId',responseObj.uid);
        this.sessionStore.store('role','0');
        

        if(responseObj.IsOnboard==0){
          this.router.navigateByUrl('/dashboard/job-seeker-profilereg')
        }else{
          this.router.navigateByUrl('dashboard/chat-home')
        }
    }
      
    }, err => {
      console.log(err)
      //alert("Login Filed")
      this.errorMessage = err.statusText + ", Please contact your Administrator or Support Team"
      this.modalService.open('custom-macrax-modal-1');
    })

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }


}
