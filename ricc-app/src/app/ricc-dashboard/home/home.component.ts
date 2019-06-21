import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ricc-app';
  setup = false;

  constructor(private auth: Auth, private router: Router) { 
  }

  ngOnInit() {
    if(!this.auth.token){
      this.router.navigate(['/login']);
    }
  }

}
