import {Injectable} from '@angular/core';
import {Human} from './humans/human';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  HEROS: Human[

    ];

  constructor() {
  }

  getHumans() {
    return of(this.HEROS);
  }

  getHuman(id: number) {
    return of(this.HEROS.find(value => value.id === id));
  }
}
