import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  user: any = {};
  ngOnInit() {
    this.user = {
      firstname : 'Ugochukwu',
      lastname : 'Ejiogu',
      email : 'ugobugo2011@gmail.com',
      phone : '08168441395',
      title : 'Full Stack Engineer'
    }
  }

}
