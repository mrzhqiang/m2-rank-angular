import {Component, OnInit} from '@angular/core';
import {Human} from './human';
import {HumanService} from '../human.service';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
})
export class HumansComponent implements OnInit {
  humans: Human[];

  constructor(private humanService: HumanService) {
  }

  ngOnInit() {
    this.getHumans();
  }

  getHumans() {
    this.humanService.getHumans()
      .subscribe(value => this.humans = value);
  }
}
