import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'air-temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class AirTemperatureCardComponent implements OnInit {
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
