import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITrainer } from '../../services/trainers.service';

@Component({
  selector: 'proec-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.scss']
})
export class TrainerFormComponent implements OnInit {

  @Input() trainer: ITrainer;
  public form: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public get formValue(): ITrainer {
    return this.form.value;
  }

  private buildForm(): void {
    this.form = this.builder.group({
      access: this.trainer.access,
      area: this.trainer.area,
      belonging: this.trainer.belonging,
      comment: this.trainer.comment,
      fee: this.trainer.fee,
      trialFee: this.trainer.trialFee,
      membershipFee: this.trainer.membershipFee,
      hobby: this.trainer.hobby,
      imagePath: this.trainer.imagePath,
      introduction: this.trainer.introduction,
      reason: this.trainer.reason,
      salesPoint: this.trainer.salesPoint,
      trainerId: this.trainer.trainerId,
      trainerName: this.trainer.trainerName,
      trainerNameEn: this.trainer.trainerNameEn,
    });
  }


}
