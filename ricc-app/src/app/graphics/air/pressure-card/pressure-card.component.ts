import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'air-pressure-card',
  templateUrl: './pressure-card.component.html',
  styleUrls: ['./pressure-card.component.scss']
})
export class PressureCardComponent implements OnInit {
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
