import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminJobseekersService } from '../services/admin-jobseekers.service';
import { JobSeekerModel } from '../../models/job-seeker.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {

  showModal : boolean;
  propicUrl : string;
  selectedJobseeker : JobSeekerModel;
  jobseekerlist : JobSeekerModel[];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['uid', 'fullName', 'college', 'experience', 'verificationStatus'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource:any
  @ViewChild(MatSort) sort: MatSort;
  jobSeekerForm : FormGroup
  id : FormControl
  status : FormControl

  constructor(private adminJobseekersService:AdminJobseekersService, private toastrService: ToastrService) {
      this.propicUrl = '';
      this.dataSource = new MatTableDataSource<JobSeekerModel>();
      this.selectedJobseeker = new JobSeekerModel()
      this.jobSeekerForm = new FormGroup({
        status: new FormControl(),
        id: new FormControl()
     }); 
   }

  ngOnInit(): void {
    this.refreshJobSeekerList()
  }

  refreshJobSeekerList(){
    this.dataSource = new MatTableDataSource<JobSeekerModel>();
    this.adminJobseekersService.getJobSeekerList(2,0).subscribe((response) =>{
      if(response.status==200){
        this.jobseekerlist = response['data']
        this.jobseekerlist.forEach(element => {
          this.dataSource.data.push(element) ; 
        });
        this.dataSource.paginator = this.paginator;
        //this.dataSource._updateChangeSubscription();
      }else{
        this.toastrService.error(response.msg,'Error', {
          timeOut: 2000,
        });
      }
    })
  }


	getProfilePic(selectedJobseeker:JobSeekerModel){
    if(selectedJobseeker != undefined){
      return selectedJobseeker.profileUrl
    }

	}


  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  submit(){
    const status = this.jobSeekerForm.get('status').value == 'approve' ? 1 : 0
    this.adminJobseekersService.updateJobSeekerVerificationStatus({'id':this.selectedJobseeker.id , 'verificationStatus':status}).subscribe(res=>{
      if(res.status==200){    
        this.refreshJobSeekerList();
        this.hide();
        this.toastrService.success(res.msg,'Success', {
          timeOut: 2000,
        });
        
      }else{
        alert(res.msg);
        this.toastrService.error(res.msg,'Error', {
          timeOut: 2000,
        });
      }
    });
  }

  openJobSeeker(row:JobSeekerModel){
    this.jobSeekerForm.get('status').value == 'approve'
    this.showModal = true; 
    this.selectedJobseeker = row
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

