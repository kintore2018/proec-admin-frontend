import { Component, OnInit } from '@angular/core';
import { TrainersState } from 'src/app/states/trainers-state.service';
import { Observable } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';

const CODE_PANETYPE = {
  NEW: 'NEW',
  EDIT: 'EDIT'
};

@Component({
  selector: 'proec-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  public trainers$: Observable<ITrainer[]>;
  public filterKey = '';
  public isPaneOpen = false;
  private paneType: string;

  constructor(
    private trainersState: TrainersState,
    private trainerDetailState: TrainerDetailState
  ) { }

  ngOnInit() {
    this.trainersState.fetchTrainers();
    this.trainers$ = this.trainersState.$;
  }

  public get isCreate(): boolean {
    return this.paneType === CODE_PANETYPE.NEW;
  }

  public get isEdit(): boolean {
    return this.paneType === CODE_PANETYPE.EDIT;
  }

  public changeFilterKey(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.filterKey = target.value;
  }

  public filteredTrainers(trainers: ITrainer[]): ITrainer[] {
    const regExp = new RegExp(this.filterKey);
    return trainers.filter(trainer => {
      return (
        trainer.area.match(regExp)
        || trainer.trainerName.match(regExp)
        || trainer.trainerNameEn.match(regExp)
      );
    });
  }

  public createTrainer(): void {
    this.isPaneOpen = true;
    this.paneType = CODE_PANETYPE.NEW;
  }

  public editTrainer(trainerId: number): void {
    this.isPaneOpen = true;
    this.paneType = CODE_PANETYPE.EDIT;
    this.trainerDetailState.setSelectedTrainerId(trainerId);
  }

  public closePane(): void {
    this.isPaneOpen = false;
  }

}
