import { Component, OnInit, OnDestroy, ViewChild, Output, EventEmitter } from '@angular/core';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { Observable, Subscription } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';
import { TrainerFormComponent } from 'src/app/molcules/trainer-form/trainer-form.component';

@Component({
  selector: 'proec-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit, OnDestroy {

  public trainer$: Observable<ITrainer>;
  private selectedTrainerId$: Observable<number>;
  private subscription = new Subscription();
  @ViewChild(TrainerFormComponent) trainerForm: TrainerFormComponent;
  @Output() updated = new EventEmitter();

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

  public updateTrainer(): void {
    this.trainerDetailState.updateTrainer(this.trainerForm.formValue).subscribe(() => {
      this.updated.emit();
    });
  }

}
