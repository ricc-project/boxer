import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'soil-temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class TemperatureCardComponent implements OnInit {
  @Input('value') value: number;
  @Input('boundary') boundary: string;

  constructor() { }

  ngOnInit() {
  }

}
