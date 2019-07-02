import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BaseURL } from '../../models/baseUrl';
import { Actuator } from '../../models/actuator';
import { HttpClient } from '@angular/common/http';
import { Requests } from '../../utils/requests/requests'

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.scss']
})
export class ActuatorsComponent implements OnInit {
  id: number;
  status: string;
  authToken: string;
  actuators: Array<Actuator>;
  relatedCentral: string;
  changeStatusText: string;
  centrals: Array<string>;
  requests: Requests;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.centrals = [];
    this.actuators = [];
    this.changeStatusText = "";
    this.requests = new Requests(this.http);
   }

   ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      this.relatedCentral = this.route.snapshot.paramMap.get('central');
      this.actuators = this.requests.loadActuators(this.authToken, this.relatedCentral);
    } 
  }
  
  switchActuator(central){
    let message = {
      central: central,
      auth_token: this.authToken
    };  
  
    this.http.post(BaseURL + 'actuator/switch/', message)
    .subscribe(
      data => {
        console.log("Alterou", data);        
      }, 
      err => {
        console.log(err);
        
        this.changeStatusText = "Um erro inesperado aconteceu!";
      }
    ); 
  
  }
}


