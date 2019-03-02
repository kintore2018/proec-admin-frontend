import { Component, OnInit, Input } from '@angular/core';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  @Input() public trainer: ITrainer;

  constructor() { }

  ngOnInit() {
  }

}
