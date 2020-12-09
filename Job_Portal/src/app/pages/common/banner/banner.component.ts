import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  page;
  constructor(private router: Router,) {
    console.log(this.router.url);
    this.page = this.router.url.split("/")[2];
    // alert(this.page)
  }

  ngOnInit(): void {
  }

}
