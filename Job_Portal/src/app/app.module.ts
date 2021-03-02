import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './pages/common/navbar/navbar.component';
import { BannerComponent } from './pages/common/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileRegisterComponent } from './pages/profile-register/profile-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/common/slider/slider.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { JobseekerSignupComponent } from './pages/jobseeker-signup/jobseeker-signup.component';
import { RecruiterSignupComponent } from './pages/recruiter-signup/recruiter-signup.component';
import { RecruiterLoginComponent } from './pages/recruiter-login/recruiter-login.component';
import { JobseekerLoginComponent } from './pages/jobseeker-login/jobseeker-login.component';
import { JobSeekerService } from './services/job-seeker.service';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RecruiterProfileRegisterComponent } from './pages/recruiter-profile-register/recruiter-profile-register.component';
import { RecruiterService } from './services/recruiter.service';
import { SmsService } from './services/sms.service';
import { VideojsRecordComponent } from './videojs-record/videojs-record.component';
import { LoginService } from './services/login.service';
import { MultiselectDropdownModule } from 'ng2-multiselect';
import {ChatScreenComponent} from './pages/chat-screen/chat-screen.component';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { FileUploadService } from './services/file-upload.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { RecruiterForgetPasswordComponent } from './pages/recruiter-forget-password/recruiter-forget-password.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { ChatClientComponent } from './pages/chat-client/chat-client.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AdminModule } from './admin/admin.module';
import { MacraxModalModule } from './_modal';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    BannerComponent,
    ProfileRegisterComponent,
    HomeComponent,
    SliderComponent,
    SignupComponent,
    JobseekerSignupComponent,
    RecruiterSignupComponent,
    RecruiterLoginComponent,
    JobseekerLoginComponent,
    RecruiterProfileRegisterComponent,
    VideojsRecordComponent,
    ChatScreenComponent,
    ChatHomeComponent,
    ForgetPasswordComponent,
    RecruiterForgetPasswordComponent,
    DemoComponentComponent,
    ChatClientComponent,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MultiselectDropdownModule,
    NgxDropzoneModule,
    MatSelectModule,
    NgxWebstorageModule.forRoot(), 
    AdminModule,
    MacraxModalModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
  ],
  providers: [
    JobSeekerService,
    RecruiterService,
    SmsService,
    LoginService,
    FileUploadService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
