import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { RecruitersComponent } from './recruiters/recruiters.component';

export const AdminRoutes: Routes = [
  
    { path: 'tHvwrDZTTg0HV3O/ABqRxwdH49tfl4sRzksJFxJ6idaoUG/admin', component: AdminComponent},
    { path: 'tHvwrDZTTg0HV3O/ABqRxwdH49tfl4sRzksJFxJ6idaoUG/admin/jobseekers', component: JobseekersComponent},
    { path: 'tHvwrDZTTg0HV3O/ABqRxwdH49tfl4sRzksJFxJ6idaoUG/admin/recruiters', component: RecruitersComponent},
];
