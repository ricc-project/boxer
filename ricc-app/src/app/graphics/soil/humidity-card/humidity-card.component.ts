import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'soil-humidity-card',
  templateUrl: './humidity-card.component.html',
  styleUrls: ['./humidity-card.component.scss']
})
export class SoilHumidityCardComponent implements OnInit {
  @Input('value') value: {moisture1: number, moisture2: number, moisture3: number};
  @Input('moisture1') moisture1: number;
  @Input('moisture2') moisture2: number;
  @Input('moisture3') moisture3: number;

  constructor() { }

  ngOnInit() {
    this.moisture1 = this.value.moisture1;
    this.moisture2 = this.value.moisture2;
    this.moisture3 = this.value.moisture3;
  }

}
