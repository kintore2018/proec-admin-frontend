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
  public filterKey = '';
  public isLapOpen = false;

  constructor(
    private trainersState: TrainersState
  ) { }

  ngOnInit() {
    this.trainersState.fetchTrainers();
    this.trainers$ = this.trainersState.$;
  }

  public changeFilterKey(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.filterKey = target.value;
  }

  public filteredTrainers(trainers: ITrainer[]): ITrainer[] {
    return trainers.filter(trainer => {
      const regExp = new RegExp(this.filterKey);
      return (
        trainer.area.match(regExp)
        || trainer.trainerName.match(regExp)
        || trainer.trainerNameEn.match(regExp)
      );
    });
  }

  public createTrainer(): void {
    this.isLapOpen = !this.isLapOpen;
  }

  public closeLap(): void {
    this.isLapOpen = false;
  }

}
