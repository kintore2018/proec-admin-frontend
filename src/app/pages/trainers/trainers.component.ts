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
  private filterStr = '';

  constructor(
    private trainersState: TrainersState
  ) { }

  ngOnInit() {
    this.trainersState.fetchTrainers();
    this.trainers$ = this.trainersState.$;
  }

  public changeFilterStr(e): void {
    this.filterStr = e.target.value;
  }

  public filteredTrainers(trainers: ITrainer[]): ITrainer[] {
    return trainers.filter(trainer => {
      const regExp = new RegExp(this.filterStr);
      return (
        trainer.area.match(regExp)
        || trainer.trainerName.match(regExp)
        || trainer.trainerNameEn.match(regExp)
      );
    });
  }

}
