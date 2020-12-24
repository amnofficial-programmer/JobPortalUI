import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { GeneralUtilityService } from '../../../services/general-utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionStore: SessionStorageService, private generalUtilityService : GeneralUtilityService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
      // const  token = this.sessionStore.retrieve('macrax-token');
      // if(undefined != token || null != token){
      //   return true;
      // }else{
      //   return false;
      // }

      return this.generalUtilityService.LoggedIn();
  }

  logout(){
    this.sessionStore.clear();
  }

}
