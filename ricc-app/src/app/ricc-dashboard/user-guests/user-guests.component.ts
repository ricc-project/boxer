import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-guests',
  templateUrl: './user-guests.component.html',
  styleUrls: ['./user-guests.component.scss']
})
export class UserGuestsComponent implements OnInit {
  authToken: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }

}
