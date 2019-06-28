import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Central } from '../../models/central';

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
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }

    this.centrals = this.loadCentrals();
  }

  switchActuator(central){
    let message = {
      central: central.id,
      auth_token: this.authToken
    };
  
    
    // this.central.automaticIrrigation = !automaticIrrigation;
    // console.log("YOUUU", automaticIrrigation);
    // this.changeStatusText = "Aplicando alterações";  

    // let message = { 
    //   central: "b8:27:eb:b1:85:66",
    //   auth_token: this.authToken
    // };



    this.http.post('http://snowball.lappis.rocks/actuator/switch', message)
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


  loadCentrals(){
    let centrals = []
    let a = [1, 2]


    this.http.get('http://snowball.lappis.rocks/api/v1/centrals/')
    .subscribe(
      data => {
        for (const cData of data) {
          let central = new Central;
           
          central.id = cData['mac_address'];
          central.status = "up";
          central.stations = 2;
          central.actuators = 1;
          central.automaticIrrigation = cData['automatic_irrigation'];
          // central.automaticIrrigation = true;
          
          centrals.push(central)      
        }

        console.log(data);
      }, 
      err => {
        this.changeStatusText = "Um erro inesperado aconteceu!";
      }
    );

    return centrals;
  }
}
