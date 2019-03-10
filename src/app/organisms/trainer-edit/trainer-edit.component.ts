import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { Observable } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {

  @Input() trainerId = 0;
  public trainer$: Observable<ITrainer>;

  constructor(
    private trainerDetailState: TrainerDetailState
  ) { }

  ngOnInit() {
    if (this.trainerId) {
      this.trainerDetailState.fetchTrainer(this.trainerId);
    }
    this.trainer$ = this.trainerDetailState.$;
  }

}
