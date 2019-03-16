import { Injectable } from '@angular/core';
import { AbstractStateService } from './abstract-state.service';
import { ITrainer, TrainersService } from '../services/trainers.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerDetailState extends AbstractStateService<ITrainer> {

  public defaultState: ITrainer = {
    access: '',
    area: '',
    belonging: '',
    comment: '',
    fee: '',
    trialFee: '',
    membershipFee: '',
    hobby: '',
    imagePath: '',
    introduction: '',
    reason: '',
    salesPoint: '',
    trainerId: 0,
    trainerName: '',
    trainerNameEn: '',
  };
  public subject = new Subject<ITrainer>();
  public trainerIdSubject = new Subject<number>();

  constructor(
    private trainersService: TrainersService
  ) {
    super();
  }

  get $selectedTrainerId(): Observable<number> {
    return this.trainerIdSubject.asObservable();
  }

  public setSelectedTrainerId(trainerId: number): void {
    this.trainerIdSubject.next(trainerId);
  }

  public fetchTrainer(trainerId: number): void {
    this.trainersService.fetchTrainer(trainerId).subscribe((trainer: ITrainer) => {
      this.setValue(trainer);
    });
  }

  public updateTrainer(param: ITrainer): Observable<ITrainer> {
    return this.trainersService.updateTrainer(param);
  }

  public createTrainer(param: ITrainer): void {
    this.trainersService.createTrainer(param).subscribe((trainer: ITrainer) => {
      this.setValue(trainer);
    });
  }
}
