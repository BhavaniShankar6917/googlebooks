import { Component, Input } from '@angular/core';

import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { EventService } from '../event.service';

@Component({
  selector: 'app-filtertab',
  templateUrl: './filtertab.component.html',
  styleUrls: ['./filtertab.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ width: '*', transform: 'translateX(-100%)' }),
        animate(
          '0.5s ease-out',
          style({
            opacity: 1,
            transform: 'translateX(0px)',
          })
        ),
      ]),
      transition('* => void', [
        animate(
          '0.4s ease-in',
          style({
            transform: 'translateX(-100%)',
          })
        ),
      ]),
    ]),
    trigger('upDown', [
      state(
        'up',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      state(
        'down',
        style({
          transform: 'rotate(0)',
        })
      ),
      transition('down => up', animate('0.4s ease-out')),
      transition('up => down', animate('0.4s ease-out')),
    ]),
  ],
})
export class FiltertabComponent {
  showfilter: boolean = false;
  allF: any;
  booksF: any;
  magazinesF: any;
  ebooksF: any;
  freeF: any;
  paidF: any;
  partialF: any;
  printType: boolean = true;
  filterType: boolean = true;
  constructor(private eventService: EventService) {}

  onChange() {
    this.eventService.checkBoxToggle.next({
      allF: this.allF,
      booksF: this.booksF,
      magazinesF: this.magazinesF,
      ebooksF: this.ebooksF,
      freeF: this.freeF,
      paidF: this.paidF,
      partialF: this.partialF,
    });
    // console.log(this.booksF);
  }
  resetFilters() {
    this.allF = false;
    this.booksF = false;
    this.magazinesF = false;
    this.ebooksF = false;
    this.freeF = false;
    this.paidF = false;
    this.partialF = false;
  }
  toggleFilter() {
    this.showfilter = !this.showfilter;
  }
}
