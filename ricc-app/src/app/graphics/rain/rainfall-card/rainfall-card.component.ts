import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rain-rainfall-card',
  templateUrl: './rainfall-card.component.html',
  styleUrls: ['./rainfall-card.component.scss']
})
export class RainfallCardComponent implements OnInit {
  @Input('value') value: number;

  constructor() { }

  ngOnInit() {
  }

}
