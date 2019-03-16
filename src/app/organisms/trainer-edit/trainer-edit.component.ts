import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { Observable, Subscription } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit, OnDestroy {

  public trainer$: Observable<ITrainer>;
  private selectedTrainerId$: Observable<number>;
  private subscription = new Subscription();

  constructor(
    private trainerDetailState: TrainerDetailState,
  ) {
  }

  ngOnInit() {
    this.selectedTrainerId$ = this.trainerDetailState.$selectedTrainerId;
    this.subscription = this.selectedTrainerId$.subscribe((trainerId: number) => {
      this.trainerDetailState.fetchTrainer(trainerId);
    });

    this.trainer$ = this.trainerDetailState.$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public save(): void {
    console.log('update');
  }

}
