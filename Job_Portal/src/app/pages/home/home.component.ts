import { Component, OnInit } from '@angular/core';
import { GeneralUtilityService } from '../../services/general-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private generalUtilityService : GeneralUtilityService) { }

  ngOnInit(): void {
  }


  isLoggedIn(){
    return this.generalUtilityService.LoggedIn();
  }

  

}
