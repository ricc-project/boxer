import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    if(!this.auth.token){
      this.router.navigate(['/login']);
    }
  }

}
