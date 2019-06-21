import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.scss']
})
export class ActuatorsComponent implements OnInit {
  id: number;
  status: string;

  constructor(private auth: Auth, private router: Router) {
    this.id = 0;
    this.status = "up";
   }

  ngOnInit() {
    if(!this.auth.token){
      this.router.navigate(['/login']);
    }
  }

}
