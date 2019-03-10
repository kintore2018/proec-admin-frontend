import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'proec-lap',
  templateUrl: './lap.component.html',
  styleUrls: ['./lap.component.scss']
})
export class LapComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeLap(): void {
    this.close.emit();
  }

}
