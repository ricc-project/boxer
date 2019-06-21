import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.scss']
})
export class ActuatorsComponent implements OnInit {
  id: number;
  status: string;
  authToken: string;

  constructor(private router: Router) {
    this.id = 0;
    this.status = "up";
   }

   ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }
  
}
