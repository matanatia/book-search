import { Component, OnInit, Input } from '@angular/core';
import { BookInfo } from "../../models/book-info";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: BookInfo;
  showInfo: boolean;

  constructor() { 
    this.showInfo = false;
  }

  ngOnInit() {
  }

  toggelHiddenInfo() {
    this.showInfo = !this.showInfo;
  }

}
