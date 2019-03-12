import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'proec-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.scss']
})
export class PaneComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePane(): void {
    this.close.emit();
  }

}
