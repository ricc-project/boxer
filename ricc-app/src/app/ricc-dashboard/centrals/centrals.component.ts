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
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }else{
      this.centrals = this.loadCentrals();
    }


  }

  loadCentrals(){
    let centrals = []

    this.http.get('http://snowball.lappis.rocks/api/v1/centrals/')
    .subscribe(
      data => {
        let d = data as Array<Object>;
        for (const cData of d) {
          let central = new Central;
          central.id = cData['mac_address'];
          central.automaticIrrigation = cData['automatic_irrigation'];

          let args= {
            central: central.id,
            auth_token: this.authToken
          };  
          
          // Get amount of stations
          this.http.post('http://snowball.lappis.rocks/central/stations_count/', args)
          .subscribe(
            data => {
              central.stations = data['message'];
            }, 
            err => {
              this.changeStatusText = "Um erro inesperado aconteceu!";
            }
          );
          
          // Get amount of actuators
          this.http.post('http://snowball.lappis.rocks/central/actuators_count/', args)
          .subscribe(
            data => {
              central.actuators = data['message'];
            }, 
            err => {
              this.changeStatusText = "Um erro inesperado aconteceu!";
            }
          );


          centrals.push(central)
                
        }
      }, 
      err => {
        this.changeStatusText = "Um erro inesperado aconteceu!";
      }
    );
    
    return centrals;
  }
}
