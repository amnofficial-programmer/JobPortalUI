import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { JobseekerLoginComponent } from './pages/jobseeker-login/jobseeker-login.component';
import { JobseekerSignupComponent } from './pages/jobseeker-signup/jobseeker-signup.component';
import { LoginComponent } from './pages/login/login.component'
import { ProfileRegisterComponent } from './pages/profile-register/profile-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecruiterLoginComponent } from './pages/recruiter-login/recruiter-login.component';
import { RecruiterSignupComponent } from './pages/recruiter-signup/recruiter-signup.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecruiterProfileRegisterComponent } from './pages/recruiter-profile-register/recruiter-profile-register.component';
import { VideojsRecordComponent } from './videojs-record/videojs-record.component';
import { ChatScreenComponent } from './pages/chat-screen/chat-screen.component';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { RecruiterForgetPasswordComponent } from './pages/recruiter-forget-password/recruiter-forget-password.component';
import { DemoComponentComponent } from './demo-component/demo-component.component'; 
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard/chat-home', pathMatch: 'full' },
    {
        path: 'tHvwrDZTTg0HV3O/ABqRxwdH49tfl4sRzksJFxJ6idaoUG/admin',
        component: AdminComponent,
        children: [
            {
          path: '',
          loadChildren: './admin/admin.module#AdminModule'
    }]},

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'jobseeker-signup', component: JobseekerSignupComponent },
    { path: 'jobseeker-login', component: JobseekerLoginComponent },
    { path: 'recruiter-signup', component: RecruiterSignupComponent },
    { path: 'recruiter-login', component: RecruiterLoginComponent },
    { path: 'dashbaord', component: DashboardComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'job-seeker-profilereg', component: ProfileRegisterComponent },
            { path: 'recruiter-profilereg', component: RecruiterProfileRegisterComponent },
            { path: 'video', component: VideojsRecordComponent },
            { path: 'chat', component: ChatScreenComponent },
            { path: 'chat-home', component: ChatHomeComponent },
            { path: 'recruiter-forgot-password', component: RecruiterForgetPasswordComponent },
            { path: 'forgot-password', component: ForgetPasswordComponent },
        ]
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
