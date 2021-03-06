import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'soil-temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class SoilTemperatureCardComponent implements OnInit {
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
