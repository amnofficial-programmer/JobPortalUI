import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminJobseekersService } from '../services/admin-jobseekers.service';
import { JobSeekerModel } from '../../models/job-seeker.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['uid', 'fullName', 'college', 'experience', 'verificationStatus'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<JobSeekerModel>();
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private adminJobseekersService:AdminJobseekersService) {

   }

  ngOnInit(): void {
    this.adminJobseekersService.getJobSeekerList(2,1).subscribe((response) =>{
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

