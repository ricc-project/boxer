import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BaseURL } from '../../models/baseUrl';
import { Actuator } from '../../models/actuator';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.centrals = [];
    this.actuators = [];
    this.changeStatusText = "";
   }

   ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      this.relatedCentral = this.route.snapshot.paramMap.get('central');
      this.loadActuators();
    } 
  }
  

  loadActuators(){
    let actuators = []
    let args = {
      auth_token: this.authToken  
    }

    this.http.post(BaseURL + 'actuators/', args)
    .subscribe(
      data => {
        for (const actuator of data['actuators']) {
          if (this.relatedCentral !== null){
            if (this.relatedCentral == actuator.related_central){
              actuators.push(actuator);
              this.getCentrals(actuator);
            }
          } else{
            actuators.push(actuator);
            this.getCentrals(actuator);
          }
        }
        this.addDataActuators(actuators);
      }, 
      err => {
        console.log("Not good enough!");
        
      }
    );
  }

  getCentrals(station){
    // Get centrals 
    if(this.centrals.indexOf(station.related_central) == -1 ){
      this.centrals.push(station.related_central);            
    }
  }

  addDataActuators(actuators){
    for (const central of this.centrals) {      

      let args = {
        auth_token: this.authToken,
        central: central
      }

      this.http.post(BaseURL + 'actuator/last_datas/', args)
      .subscribe(
        data => {
          let datas = data as Array<any>;
          
          for (const d of datas) {
            let actuatorName = d['actuator']['name'];
            let actuatorData = d['data'];

            let actuator = actuators.find(a => a.name === actuatorName);            
            actuator.data = actuatorData;
            this.actuators.push(actuator);            
          }          
        }, 
        err => {
          console.log("Not good enough!");
          
        }
      );        
    }

    console.log(this.actuators);
    

  }

  switchActuator(central){
    let message = {
      central: central,
      auth_token: this.authToken
    };  
    
    console.log("asdf", message);
  
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


