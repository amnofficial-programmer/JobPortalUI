import { Component, OnInit } from '@angular/core';
import { GeneralUtilityService } from '../../services/general-utility.service';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MacraxModalService } from '../../_modal';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentIndex = 0
  jobs = []
  pageEvent: PageEvent;
 // datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;

  constructor(private generalUtilityService : GeneralUtilityService,
              private recruiterService:RecruiterService,
              private router:Router,
              private modalService: MacraxModalService,
              private jobSeerkerService:JobSeekerService,) { 
                this.currentIndex = 0
                this.jobs = []
                this.pageIndex = 0;
                this.pageSize = 10;

              }

  ngOnInit(): void {

    /**
     * Execute this only when user logged in
     */
    // if(this.generalUtilityService.LoggedIn()){
    //   this.getAllJobs(this.currentIndex)
    // }else{
    //   this.router.navigateByUrl('dashboard/home')
    // }
    this.getAllJobs(this.currentIndex)
    this.pageIndex = 0;
    this.pageSize = 10;
  }

  getJobsData(event?:PageEvent){
    const index = event.pageIndex
    this.jobs = []
    this.recruiterService.getAllJobs(index).subscribe(
      response =>{
        if(response.status != 200) {
          // handle error

        } else {
          this.jobs = response.data;
          this.pageIndex = index
          this.pageSize = this.pageSize;
          this.length = this.length;
        }
      },
      error =>{
        // handle error
      }
    );

    console.log(event);
    return event;
  }
  getAllJobs(index:number){
    this.recruiterService.getAllJobs(index).subscribe(response =>{
      if(response.status==200){
        this.jobs=response.data;
        console.log(this.jobs)
      }else{
        //this.modalService.open('chat-home-failed-rest-call');
      } 
      },err=>{
       // this.modalService.open('chat-home-failed-rest-call');
      });
      
  }
  
  calculateNoOfpages(){
    this.jobSeerkerService.getJobsCount().subscribe(response =>{
      console.log(response.data.allRecord)
      //this.noOfPages=Array.from({length: response.data.allRecord}, (_, i) => i + 1)
      this.length = response.data.allRecord
    })
  }


  isLoggedIn(){
    return this.generalUtilityService.LoggedIn();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  

}
