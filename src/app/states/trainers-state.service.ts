import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractStateService } from './abstract-state.service';
import { ITrainer, TrainersService } from '../services/trainers.service';

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
    this.trainersService.fetchTrainers().subscribe((trainers: ITrainer[]) => {
      this.setValue(trainers);
    });
  }
}
