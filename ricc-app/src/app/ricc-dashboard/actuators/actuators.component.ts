import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.scss']
})
export class ActuatorsComponent implements OnInit {
  id: number;
  status: string;

  constructor() {
    this.id = 0;
    this.status = "up";
   }

  ngOnInit() {
  }

}
