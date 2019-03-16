import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ITrainer } from 'src/app/services/trainers.service';
import { TrainerDetailState } from 'src/app/states/trainer-detail-state.service';
import { TrainerFormComponent } from 'src/app/molcules/trainer-form/trainer-form.component';

@Component({
  selector: 'proec-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.scss']
})
export class TrainerCreateComponent implements OnInit {

  public trainer: ITrainer;
  @Output() created = new EventEmitter();
  @ViewChild(TrainerFormComponent) trainerForm: TrainerFormComponent;

  constructor(
    private trainerDetailState: TrainerDetailState
  ) { }

  ngOnInit() {
    this.trainer = {
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
      trainerId: null,
      trainerName: '',
      trainerNameEn: '',
    };
  }

  public createTrainer(): void {
    this.trainerDetailState.createTrainer(this.trainerForm.formValue).subscribe(() => {
      this.created.emit();
    });
  }

}
