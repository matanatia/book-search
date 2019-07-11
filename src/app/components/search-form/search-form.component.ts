import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SearchService } from "../../services/search.service";

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //get the form search value
    let search_val: string = form.controls.search.value;
    //use api to search the value
    this.searchService.searchBook(search_val);
    //clean the form search value
    form.reset();
  }

}
