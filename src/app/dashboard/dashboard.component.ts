import { Component, OnInit } from '@angular/core';
import {Human} from '../humans/human';
import {HumanService} from '../human.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  humans: Human[] = [];

  constructor(private humanService: HumanService) { }

  ngOnInit() {
    this.getHumans();
  }

  getHumans() {
    this.humanService.getHumans()
      .subscribe(value => this.humans = value.slice(1, 5));
  }

}
