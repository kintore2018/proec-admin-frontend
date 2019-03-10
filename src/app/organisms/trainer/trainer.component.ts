import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITrainer } from 'src/app/services/trainers.service';

@Component({
  selector: 'proec-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  @Input() public trainer: ITrainer;
  @Output() edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public editTrainer(trainerId: number): void {
    this.edit.emit(trainerId);
  }

}
