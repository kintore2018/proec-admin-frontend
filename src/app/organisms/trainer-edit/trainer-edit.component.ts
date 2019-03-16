import { Component, OnInit, Input } from '@angular/core';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { Observable } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {

  public trainer$: Observable<ITrainer>;
  public selectedTrainerId$: Observable<number>;

  constructor(
    private trainerDetailState: TrainerDetailState,
  ) {
  }

  ngOnInit() {
    this.selectedTrainerId$ = this.trainerDetailState.$selectedTrainerId;
    this.selectedTrainerId$.subscribe((trainerId: number) => {
      this.trainerDetailState.fetchTrainer(trainerId);
    });

    this.trainer$ = this.trainerDetailState.$;
  }

  public save(): void {
    console.log('update');
  }

}
