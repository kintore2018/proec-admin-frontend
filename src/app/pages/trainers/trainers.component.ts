import { Component, OnInit } from '@angular/core';
import { TrainersState } from 'src/app/states/trainers-state.service';
import { Observable } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  public trainers$: Observable<ITrainer[]>;

  constructor(
    private trainersState: TrainersState
  ) { }

  ngOnInit() {
    this.trainersState.fetchTrainers();
    this.trainers$ = this.trainersState.$;
  }

}
