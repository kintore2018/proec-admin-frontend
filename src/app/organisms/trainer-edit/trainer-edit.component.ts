import { Component, OnInit, Input } from '@angular/core';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { Observable } from 'rxjs';
import { ITrainer } from 'src/app/services/trainers.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'proec-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {

  @Input() trainerId = 0;
  public trainer$: Observable<ITrainer>;
  public formGroup: FormGroup;

  constructor(
    private trainerDetailState: TrainerDetailState,
    private builder: FormBuilder
  ) {
    this.formGroup = this.builder.group({
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
    });
  }

  ngOnInit() {
    if (this.trainerId) {
      this.trainerDetailState.fetchTrainer(this.trainerId);
    }
    this.trainer$ = this.trainerDetailState.$;
  }

  public save(): void {
    this.trainerDetailState.updateTrainer(this.formGroup.value).subscribe(() => {
      console.log('updated!!!!');
    });
  }

}
