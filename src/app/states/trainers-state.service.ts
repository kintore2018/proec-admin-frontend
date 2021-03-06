import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractStateService } from './abstract-state.service';
import { ITrainer, TrainersService, ITrainersResponse } from '../services/trainers.service';

@Injectable({
  providedIn: 'root'
})
export class TrainersState extends AbstractStateService<ITrainer[]> {

  public defaultState = null;
  public subject = new BehaviorSubject<ITrainer[]>(this.defaultState);

  constructor(
    private trainersService: TrainersService
  ) {
    super();
  }

  public fetchTrainers(): void {
    this.trainersService.fetchTrainers().subscribe((res: ITrainersResponse) => {
      this.setValue(res.trainers);
    });
  }
}
