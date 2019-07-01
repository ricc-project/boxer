import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wind-speed-direction-card',
  templateUrl: './speed-direction-card.component.html',
  styleUrls: ['./speed-direction-card.component.scss']
})
export class SpeedDirectionCardComponent implements OnInit {
  @Input('speed') speed: number;
  @Input('direction') direction: number; 

  constructor() { }

  ngOnInit() {
    this.direction = this.direction + 225;
  }

}
