import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Central } from '../../models/central';
import { BaseURL } from '../../models/baseUrl';

@Component({
  selector: 'app-centrals',
  templateUrl: './centrals.component.html',
  styleUrls: ['./centrals.component.scss']
})
export class CentralsComponent implements OnInit {
  centrals: Array<Central>;
  authToken: string;
  changeStatusText: string;

  constructor(private http: HttpClient, private router: Router) { 
    this.changeStatusText = "";

  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }else{
      this.centrals = this.loadCentrals();
    }


  }

  loadCentrals(){
    let centrals = []
    let args = {auth_token: this.authToken};

    this.http.post(BaseURL + 'centrals/', args)
    .subscribe(
      data => {
        console.log(data);
        for (const central of data['centrals']) {
          centrals.push(central);          
        }
      }, 
      err => {
        this.changeStatusText = "Um erro inesperado aconteceu!";
      }
    );
    
    return centrals;
  }
}
