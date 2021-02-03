import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminRecruiterService } from '../services/admin-recruiter.service';
import { RecruiterModel } from '../../models/recruiter.model';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css']
})
export class RecruitersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['uid', 'fullName', 'companyName', 'jobRole', 'verificationStatus'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<RecruiterModel>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminRecruiterService: AdminRecruiterService) { }

  ngOnInit(): void {
    this.adminRecruiterService.getRecruiterList(2,1).subscribe((response) =>{
      if(response.status==200){
        let data = response['data']
        data.forEach(element => {
          this.dataSource.data.push(element) ; 
        });
        this.dataSource.paginator = this.paginator;
        //this.dataSource._updateChangeSubscription();
      }else{
        alert(response.msg)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
