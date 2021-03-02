import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutes } from './admin-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { AdminJobseekersService } from './services/admin-jobseekers.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AdminComponent, JobseekersComponent, RecruitersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes),
    ToastrModule.forRoot()
  ],
  providers: [
    AdminJobseekersService,
  ],

})
export class AdminModule { }
