import { Component, OnInit } from '@angular/core';
import { CardsData } from '../event.service';
@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent {
  constructor(private cardsData: CardsData) {}
  arr: Array<any> = [];
  ngOnInit() {
    this.cardsData.dataForCards.subscribe((res) => {
      this.arr = [];
      res?.forEach((element: any) => {
        this.arr.push(element);
      });
      console.log(this.arr);
    });
  }
}
