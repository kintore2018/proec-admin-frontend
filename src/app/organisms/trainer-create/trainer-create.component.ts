import { Component, OnInit } from '@angular/core';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.scss']
})
export class TrainerCreateComponent implements OnInit {

  public trainer: ITrainer;

  constructor() { }

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
      trainerId: 0,
      trainerName: '',
      trainerNameEn: '',
    };
  }

}
