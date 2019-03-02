import { Component, OnInit } from '@angular/core';
import { TrainerDetailState } from './states/trainer-detail-state.service';
import { TrainersState } from './states/trainers-state.service';

@Component({
  selector: 'proec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    // private trainerDetailState: TrainerDetailState,
    // private trainersState: TrainersState
  ) {

  }

  ngOnInit(): void {
    // this.fetchTrainers();
  }

  private fetchTrainers(): void {
    // this.trainersState.fetchTrainers();
  }

  public updateTrainer(): void {
    // this.trainerDetailState.updateTrainer(null);

    // this.openLAP(1);
  }

  public deleteTrainer(): void {
    // this.trainerService.deleteTrainers([1]).subscribe(res => {
    //   console.log(res, 'delete!!!!');
    // });
    // console.log('delete');
  }

  public createTrainer(): void {
    // this.openLAP(1);
  }

  private openLAP(id: number): void {
    // console.log('open LAP');
  }

}
