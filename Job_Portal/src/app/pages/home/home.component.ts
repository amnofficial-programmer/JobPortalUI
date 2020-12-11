import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isLoggedInUser(){
    //localStorage.setItem('macrax-emailId',responseObj.userName);
    //localStorage.setItem('macrax-password',this.loginFormJobSeeker.value.password);
    //const userName = localStorage.getItem('macrax-emailId');
    //const password = localStorage.getItem('macrax-password');

  }

}
