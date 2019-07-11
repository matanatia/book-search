import { Injectable } from '@angular/core';
import { BookInfo } from "../models/book-info";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search_results: BookInfo[];
  private api_key: string;
  private end_point: string;
  start_index: number;
  search_val: string;
  next_index_to_load: number;
  found_results: boolean;

  constructor() {
    this.search_results = [];
    this.api_key = "AIzaSyDKKvKwMhQxiehHW-ZTU0KBkxZ9VHHdnJc";
    this.end_point = `https://www.googleapis.com/books/v1/volumes?key=${this.api_key}`;
    this.start_index = 0;
    this.search_val = "";
    this.next_index_to_load = 10;
    this.found_results = true;
  }

  async searchBook(search_val: string, start_index?: number) {
    //reset the values for new search
    this.start_index = start_index ? start_index : 0;
    this.search_results = start_index ? this.search_results : [];
    //set the search values in the api url
    this.search_val = search_val;
    //set the url
    const url: string = `${this.end_point}&q=${this.search_val}&startIndex=${this.start_index}`

    //get the resulte from the api
    const res = await fetch(url);
    const res_json = await res.json();

    //insert the results of the search
    this.found_results = false;
    if (res_json["items"]) {
      this.found_results = true;
      for (const key of Object.keys(res_json["items"])) {
        let book_info = res_json["items"][key]["volumeInfo"];
        //get only the data fileds we need
        let { title, authors, previewLink, imageLinks, publisher, publishedDate, description } = book_info;
        this.search_results.push({ title, authors, previewLink, imageLinks, publisher, publishedDate, description });
      }
    }
  }

  getBooks(): BookInfo[] {
    return this.search_results;
  }

  loadNextPage() {
    this.searchBook(this.search_val, this.start_index + this.next_index_to_load);
  }
}
