import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centrals',
  templateUrl: './centrals.component.html',
  styleUrls: ['./centrals.component.scss']
})
export class CentralsComponent implements OnInit {
  id: number;
  status: string;
  stations: any;
  actuators: any;
  automaticIrrigation: boolean;

  constructor() { 
    this.id = 1;
    this.status = "up";
    this.stations = ['a', 'b'];
    this.actuators = [];
    this.automaticIrrigation = true;

  }

  ngOnInit() {
  }

}