import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminRecruiterService } from '../services/admin-recruiter.service';
import { RecruiterModel } from '../../models/recruiter.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css']
})
export class RecruitersComponent implements OnInit {

  showModal : boolean;
  selectedRecruiter : RecruiterModel;
  recruiterlist : RecruiterModel[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['uid', 'fullName', 'companyName', 'jobRole', 'verificationStatus'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<RecruiterModel>();
  @ViewChild(MatSort) sort: MatSort;
  recruiterForm : FormGroup
  id : FormControl
  status : FormControl

  constructor(private adminRecruiterService: AdminRecruiterService, private toastrService: ToastrService) { 

    this.dataSource = new MatTableDataSource<RecruiterModel>();
    this.selectedRecruiter = new RecruiterModel()
    this.recruiterForm = new FormGroup({
      status: new FormControl(),
      id: new FormControl()
   }); 
  }

  ngOnInit(): void {

    this.refreshRecruiterList()
   
  }

  refreshRecruiterList(){
    this.dataSource = new MatTableDataSource<RecruiterModel>();
    this.adminRecruiterService.getRecruiterList(2,0).subscribe((response) =>{
      if(response.status==200){
        let data = response['data']
        data.forEach(element => {
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
  getProfilePic(selectedRecruiter:RecruiterModel){
    if(selectedRecruiter != undefined){
      return selectedRecruiter.profileUrl
    }

	}

  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  submit(){
    const status = this.recruiterForm.get('status').value == 'approve' ? 1 : 0
    this.adminRecruiterService.updateRecruiterVerificationStatus({'id':this.selectedRecruiter.id , 'verificationStatus':status}).subscribe(res=>{
      if(res.status==200){    
        this.refreshRecruiterList();
        this.hide();
        this.toastrService.success(res.msg,'Success', {
          timeOut: 2000,
        });
        
      }else{
        this.toastrService.error(res.msg,'Error', {
          timeOut: 2000,
        });
      }
    });
    
  }

  openRecruiter(row:RecruiterModel){
    this.recruiterForm.get('status').value == 'approve'
    this.showModal = true; 
    this.selectedRecruiter = row
    console.log(row)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
