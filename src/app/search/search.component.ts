import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltertabComponent } from '../filtertab/filtertab.component';
import { EventService, CardsData } from '../event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  all: any;
  books: any;
  magazines: any;
  ebooks: any;
  free: any;
  paid: any;
  partial: any;
  displayMessage: String = '';
  constructor(
    private http: HttpClient,
    private filters: FiltertabComponent,
    private eventService: EventService,
    private cardsData: CardsData
  ) {}
  searchForm = new FormGroup({
    search: new FormControl(),
  });
  ngOnInit() {
    this.eventService.checkBoxToggle.subscribe((res) => {
      this.all = res.allF;
      this.books = res.booksF;
      this.magazines = res.magazinesF;
      this.ebooks = res.ebooksF;
      this.free = res.freeF;
      this.paid = res.paidF;
      this.partial = res.partialF;
      if (this.searchForm.get('search')?.value) this.getBooks();
    });
  }
  getBooks() {
    this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.searchForm.get('search')?.value
        }&${this.all ? 'printType=ALL' : ''}&${
          this.books ? 'printType=BOOKS' : ''
        }&${this.magazines ? 'printType=MAGAZINES' : ''}&maxResults=10`
      )
      .subscribe(({ items }: any) => {
        console.log(items);
        this.displayMessage = `showing ${items.length} results`;
        console.log(this.displayMessage);
        this.cardsData.dataForCards.next(items);
      });
    // .forEach((fun) => {
    //   console.log(fun);
    // });
  }
}
