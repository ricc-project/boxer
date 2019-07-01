import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'air-humidity-card',
  templateUrl: './humidity-card.component.html',
  styleUrls: ['./humidity-card.component.scss']
})
export class AirHumidityCardComponent implements OnInit {
  @Input('value') value: number;
  
  constructor() { }

  ngOnInit() {
  }

}
