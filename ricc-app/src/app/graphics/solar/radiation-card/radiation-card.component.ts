import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'solar-radiation-card',
  templateUrl: './radiation-card.component.html',
  styleUrls: ['./radiation-card.component.scss']
})
export class RadiationCardComponent implements OnInit {
  @Input('value') value: number;  

  constructor() { }

  ngOnInit() {
  }

}
