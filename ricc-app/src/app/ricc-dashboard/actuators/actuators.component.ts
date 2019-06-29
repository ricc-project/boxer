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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.actuators = [];
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
              this.actuators.push(actuator);
            }
          } else{
            this.actuators.push(actuator);
          }
        }  
      }, 
      err => {
        console.log("Not good enough!");
        
      }
    );

    return actuators;
  }

}
