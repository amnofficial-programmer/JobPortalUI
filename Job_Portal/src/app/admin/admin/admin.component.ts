import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menuSelected:string = 'jobseekers'

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  showJobSeekers(){
    this.menuSelected = 'jobseekers';
  }

  showRecruiters(){
    this.menuSelected = 'recruiters';
    //this.router.navigate(['recruiters'],{relativeTo:this.route});
  }
}
