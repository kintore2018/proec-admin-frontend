import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proec-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() placeholder = '';

  constructor() { }

  ngOnInit() {
  }

}
