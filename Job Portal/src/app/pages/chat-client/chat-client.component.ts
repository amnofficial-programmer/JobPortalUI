import { Component, OnInit,ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Message } from '../../models/message.model';
import { formatDate } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { WindowService } from '../../services/window.service';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { JobSeekerService } from 'src/app/services/job-seeker.service';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.css']
})
export class ChatClientComponent implements OnInit {

  messages:Message[];
  users:UserModel[];
  currentRight :number;
  userId:number;

  recruiter : UserModel[]=[];

  ngChatWindows: UserModel[];
  message:Message;
  userMessage;
  userName;
  flag:boolean;
  @ViewChild('ngChatPeople', {static: false}) ngChatPeople:ElementRef;
  @ViewChild('ngChatTitle',{static: false}) ngChatTitle:ElementRef;
  @ViewChild('ngChatWindowContainer',{static:false}) ngChatWindowContainer:ElementRef;
  @ViewChildren('ngChatWindow') ngChatWindow:QueryList<ElementRef>;

  constructor(private chatServie : ChatService, private windowService: WindowService, private recruiterService:RecruiterService, private jobSeekerService: JobSeekerService) { 
    this.messages = [];
    this.users = [];
    this.ngChatWindows= [];
    this.currentRight = 0;
    this.userMessage='';
    this.flag=false;
    this.userId = 101;
    this.recruiter = [];
    this.userName = localStorage.getItem('macrax-emailId');

  }

  ngOnInit(): void {

    this.chatServie.getMessages().subscribe(message =>{
      this.messages.push(message);
      this.users.forEach((u) => {
          if(u.messages === undefined){
            u.messages = [];
          }
          if(message['from'] === u.userName.toString()){
            u.messages.push(message);
          }
          if(message['to'] === u.userName.toString()){
            u.messages.push(message);
          }
      })
      console.log(message);

    });

    let role = localStorage.getItem('role');
    if(role == '0'){
      this.getAllRecruiters();
    }else{
      this.getAllJobSeekers();
    }
    
  }

  getAllJobSeekers(){

    this.jobSeekerService.getAllJobSeekers('0').subscribe((res)=>{
      if(res.status==200){
        //this.users=res.data;
        res.data.forEach(element => {
          let normalUser = new UserModel();
          normalUser.deserialize(element);
          this.users.push(normalUser);
        });
        
      }else{
        alert(res.msg)
      }
      
      },err=>{
        
      });
  }

  getAllRecruiters(){
    this.recruiterService.getAllRecruiters('1').subscribe((res)=>{
      if(res.status==200){
        //this.users=res.data;
        res.data.forEach(element => {
          let normalUser = new UserModel();
          normalUser.deserialize(element);
          this.users.push(normalUser);
        });
        
      }else{
        alert(res.msg)
      }
      
      },err=>{
        
      });
  }

  isCurrentUser(from){
    if(this.userName === from){
      return true;
    }
    return false;
  }

  toggleChat(){
    if(this.ngChatPeople.nativeElement.style.display === 'none'){
      this.ngChatPeople.nativeElement.style.display = 'block';
      this.ngChatTitle.nativeElement.style.marginRight = '0px';
     
     
    }else{
      this.ngChatPeople.nativeElement.style.display = 'none';
      this.ngChatTitle.nativeElement.style.marginRight = '10px';
      this.ngChatTitle.nativeElement.style.width = '240px';
    }   
  }

  openChatWithUser(event, user:UserModel){
    if(!this.checkAlreadyExists(user)) {
      if(this.checkChatWindowCanBePlcaed() ){
        console.log('Placing chat window');  
           this.pushToChatWindows(user);
     }else{
       this.removeAndOpenChatWithUser(user);
     }
    }
  }

  removeAndOpenChatWithUser(user:UserModel){
    this.ngChatWindows.pop();
    this.currentRight = this.currentRight - 320;
    this.pushToChatWindows(user);
  }



  checkAlreadyExists(user:UserModel){
    let u = this.ngChatWindows.find( us => us.id === user.id);
    if(undefined != u && null != u){
      return true
    }
    return false;
  }

  pushToChatWindows(user){
    if(this.checkAlreadyExists(user)){
      console.log(this.ngChatWindows);
    }else{
     
      var position = '';
      if(this.ngChatWindows.length <=0 ){
        this.currentRight = this.currentRight + 280;
        position = this.currentRight.toString()+'px'
      }else{
        this.currentRight = this.currentRight + 320;
        position = this.currentRight.toString()+'px'
      }
      user.setRightPosition(position);    
      this.ngChatWindows.push(user);
      this.createRoomWithUser(user);
    }
  }

  createRoomWithUser(user){
    this.joinRoom(this.userName,user.userName.toString())
  }

  joinRoom(from: string,to: string){
    this.chatServie.setupChatRoom(from,to);
  }

  // selectUserId(){
  //   this.userId = this.
  // }

  sendMessage(event, user){
    this.message = new Message();

    let from = localStorage.getItem('macrax-emailId')
    this.message['from'] = this.userName;
    this.message['to'] = user.userName.toString();
    this.message['text'] = event.target.value;
    this.message['time'] = formatDate(new Date(), 'dd/MM/yy hh:mm a', 'en-US', '+0530');

    //this.messages.push(this.message);
    this.chatServie.sendMessage(this.message);
  }

  checkChatWindowCanBePlcaed(){
    let currentScreenWidth = this.windowService.windowRef.innerWidth;
    let ngChatPeopleWidth = 240;
    let ngChatWindowWidth = 300;
    let midSpace = 40;
    let remainingspace = currentScreenWidth - (ngChatPeopleWidth + midSpace +(ngChatWindowWidth * this.ngChatWindows.length)+ 20);
    if(remainingspace > ngChatWindowWidth){
      return true;
    }else{
      return false;
    }

  }


  closeNgChatWindow(user:UserModel){
    var index = this.ngChatWindows.indexOf(user)
    if(index > -1){
      this.ngChatWindows.splice(index,1)
    }

    if(this.ngChatWindows.length === 0){
      this.currentRight = this.currentRight - 280;
    }else{
      this.currentRight = this.currentRight - 320;
    }
    

  }

  toggleChatWindow(user:UserModel){
    this.ngChatWindow.forEach((div:ElementRef) => {
        if(div.nativeElement.id === user.id.toString()){
          let container = div.nativeElement.querySelector('.ng-chat-window-container');
          if(container.style.display === 'none'){
            container.style.display = 'block'
            div.nativeElement.style.height = '360px'
          }else{
            container.style.display = 'none'
            div.nativeElement.style.height = '30px'
          }
        }

    })
  }


}
