import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit {
  authToken: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken !== null){
      this.router.navigate(['/home']);
    }
  }

}
