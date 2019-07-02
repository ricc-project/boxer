import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Central } from '../../models/central';
import { Requests } from '../../utils/requests/requests'
import { HttpClient } from '@angular/common/http';
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
  requests: Requests;

  constructor(private http: HttpClient, private router: Router) { 
    this.changeStatusText = "";
    this.requests = new Requests(this.http);
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }else{
      this.centrals = this.requests.loadCentrals(this.authToken);
    }
  }

  switchAutomaticIrrigation(central){
    let message = {
      central: central,
      auth_token: this.authToken
    };  
  
    this.http.post(BaseURL + 'central/switch/', message)
    .subscribe(
      data => {
        console.log("Alterou", data);
        
      }, 
      err => {
        console.log(err, "Um erro inesperado aconteceu!");
      }
    ); 
  
  }
}
