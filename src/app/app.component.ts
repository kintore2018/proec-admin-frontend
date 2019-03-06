import { Component, OnInit } from '@angular/core';
import { TrainerDetailState } from './states/trainer-detail-state.service';
import { TrainersState } from './states/trainers-state.service';

@Component({
  selector: 'proec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
