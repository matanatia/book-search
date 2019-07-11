import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../services/search.service";
import { BookInfo } from "../../models/book-info";

@Component({
  selector: 'search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent implements OnInit {
  constructor( public searchService: SearchService) { 
  }

  ngOnInit() {
  }

  LoadMore() {
    this.searchService.loadNextPage();
  }

}
