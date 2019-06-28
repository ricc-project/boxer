import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  authToken: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken !== null){
      this.router.navigate(['/home']);
    }
  }

}
