import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Station } from '../../models/station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  id: number;
  status: string;
  authToken: string;
  stations: Array<Station>;

  constructor(private http: HttpClient, private router: Router) { 
    this.id = 0;
    this.status = "up";
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      this.stations = this.loadStations();
    }
  }


  loadStations(){
    let stations = []

    this.http.get('http://snowball.lappis.rocks/api/v1/stations/')
    .subscribe(
      data => {        
        let d = data as Array<Object>;
        for (const sData of d) {
          let args= {
            central: "b8:27:eb:b1:85:66",
            auth_token: this.authToken,
            name: sData['name'],
          };  
          
          let station = new Station;
          station.name = sData['name'];
          
          // Get status of station
          this.http.post('http://snowball.lappis.rocks/node/status/', args)
          .subscribe(
            data => {
              if (data['status'] == "True") {
                station.status = true;
              } else{
                station.status = false;
              } 
            }, 
            err => {
              console.log("Not enough");
              
            }
          );

          // Get last data of station
          this.http.post('http://snowball.lappis.rocks/central/last_datas/', args)
          .subscribe(
            data => {
              console.log(data);
            }, 
            err => {
              console.log("Not enough");
              
            }
          );

          stations.push(station);
        }
      }, 
      err => {
        console.log("Not good enough!");
        
      }
    );
    
    return stations;
  }

}
