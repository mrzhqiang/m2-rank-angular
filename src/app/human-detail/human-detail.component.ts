import {Component, Input, OnInit} from '@angular/core';
import {Human} from '../humans/human';
import {ActivatedRoute} from '@angular/router';
import {HumanService} from '../human.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html',
  styleUrls: ['./human-detail.component.css']
})
export class HumanDetailComponent implements OnInit {

  @Input() human: Human;

  constructor(private route: ActivatedRoute,
              private humanService: HumanService,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.humanService.getHuman(id)
      .subscribe(value => this.human = value);
  }

  goBack() {
    this.location.back();
  }
}
