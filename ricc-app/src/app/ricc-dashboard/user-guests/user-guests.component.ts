import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-guests',
  templateUrl: './user-guests.component.html',
  styleUrls: ['./user-guests.component.scss']
})
export class UserGuestsComponent implements OnInit {

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    if(!this.auth.token){
      this.router.navigate(['/login']);
    }
  }

}
