import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
  checkBoxToggle = new BehaviorSubject<any>('');
}
export class CardsData {
  dataForCards = new BehaviorSubject<any>('');
}
