import { Injectable } from '@angular/core';
import { AbstractStateService } from './abstract-state.service';
import { ITrainer, TrainersService } from '../services/trainers.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerDetailState extends AbstractStateService<ITrainer> {

  public defaultState = null;
  public subject = new BehaviorSubject<ITrainer>(this.defaultState);

  constructor(
    private trainersService: TrainersService
  ) {
    super();
  }

  fetchTrainer(id: number): void {
    this.trainersService.fetchTrainer(id).subscribe((trainer: ITrainer) => {
      this.setValue(trainer);
    });
  }

  updateTrainer(param: ITrainer): void {
    this.trainersService.updateTrainer(param).subscribe((trainer: ITrainer) => {
      this.setValue(trainer);
    });
  }

  createTrainer(param: ITrainer): void {
    this.trainersService.createTrainer(param).subscribe((trainer: ITrainer) => {
      this.setValue(trainer);
    });
  }
}
