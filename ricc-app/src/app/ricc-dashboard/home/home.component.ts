import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ricc-app';
  setup = false;
  authToken: string;

  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }

}
