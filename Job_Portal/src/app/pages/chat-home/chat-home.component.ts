import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { RecruiterModel } from 'src/app/models/recruiter.model';
import { MacraxModalService } from '../../_modal';
import { GeneralUtilityService } from '../../services/general-utility.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {

  currentIndex = 0
  jobs: RecruiterModel[]


  constructor(private recruiterService:RecruiterService,
              private modalService: MacraxModalService,
              private router:Router,
              private generalUtilityService : GeneralUtilityService) {
    this.currentIndex = 1
    this.jobs = []
   }

  ngOnInit(): void {
    /**
     * Execute this only when user logged in
     */
    if(this.generalUtilityService.LoggedIn()){
      this.getAllJobs(this.currentIndex)
    }else{
      this.router.navigateByUrl('dashboard/home')
    }
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
