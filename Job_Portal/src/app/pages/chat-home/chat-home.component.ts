import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { RecruiterModel } from 'src/app/models/recruiter.model';
import { MacraxModalService } from '../../_modal';
import { GeneralUtilityService } from '../../services/general-utility.service';
import { Router } from '@angular/router';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  currentIndex = 0
  jobs: RecruiterModel[]
  noOfPages:number[]
  totalPages:number
  pageEvent: PageEvent;
 // datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;

  constructor(private recruiterService:RecruiterService,
              private modalService: MacraxModalService,
              private router:Router,
              private jobSeerkerService:JobSeekerService,
              private generalUtilityService : GeneralUtilityService) {
    this.currentIndex = 1
    this.jobs = []
    this.noOfPages = [1,2,3];
   // this.totalPages=8
    this.pageIndex = 0;
    this.pageSize = 10;
   }

  ngOnInit(): void {

    this.calculateNoOfpages()
    /**
     * Execute this only when user logged in
     */
    if(this.generalUtilityService.LoggedIn()){
      this.getAllJobs(this.currentIndex)
    }else{
      this.router.navigateByUrl('dashboard/home')
    }

  }

  calculateNoOfpages(){
    this.jobSeerkerService.getJobsCount().subscribe(response =>{
      console.log(response.data.allRecord)
      //this.noOfPages=Array.from({length: response.data.allRecord}, (_, i) => i + 1)
      this.length = response.data.allRecord
    })
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
        this.modalService.open('chat-home-failed-rest-call');
      } 
      },err=>{
        this.modalService.open('chat-home-failed-rest-call');
      });
      
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }

  goToLink(url: string, event){
    //event.preventDefault()
    window.open(url);
  }

  
  isLoggedIn(){
    return this.generalUtilityService.LoggedIn();
  }

}
