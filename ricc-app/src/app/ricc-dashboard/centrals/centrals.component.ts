import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
  authToken: string;

  constructor(private router: Router) { 
    this.id = 1;
    this.status = "up";
    this.stations = ['a', 'b'];
    this.actuators = [];
    this.automaticIrrigation = true;

  }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }

}
