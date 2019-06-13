import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  id: number;
  status: string;

  constructor() { 
    this.id = 0;
    this.status = "up";
  }

  ngOnInit() {
  }

}
