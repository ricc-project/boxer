import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wind-speed-direction-card',
  templateUrl: './speed-direction-card.component.html',
  styleUrls: ['./speed-direction-card.component.scss']
})
export class SpeedDirectionCardComponent implements OnInit {
  @Input('value') value: {speed: number, direction:number};
  @Input('central') central: string;
  @Input('station') station: string;
  speed: number;
  direction: number; 

  constructor() { }

  ngOnInit() {
    this.speed = this.value.speed;
    this.direction = (this.value.direction * -1) - 227 ;
  }

}
