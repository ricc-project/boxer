import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'soil-humidity-card',
  templateUrl: './humidity-card.component.html',
  styleUrls: ['./humidity-card.component.scss']
})
export class SoilHumidityCardComponent implements OnInit {
  @Input('moisture1') moisture1: number;
  @Input('moisture2') moisture2: number;
  @Input('moisture3') moisture3: number;

  constructor() { }

  ngOnInit() {
  }

}
