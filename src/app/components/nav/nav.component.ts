import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: string;

  constructor() {
    this.user = null;
   }

  ngOnInit() {
    if(localStorage.getItem("user")) {
      this.user = localStorage.getItem("user");
    }
  }

}
