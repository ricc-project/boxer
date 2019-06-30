import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Station } from '../../models/station';
import { BaseURL } from '../../models/baseUrl';

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
  relatedCentral: string;
  centrals: Array<string>;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    this.relatedCentral = null;
    this.centrals = [];
    this.stations = [];
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      this.relatedCentral = this.route.snapshot.paramMap.get('central')
      this.loadStations();
    }
  }


  loadStations(){
    let stations = []

    let args = {
      auth_token: this.authToken  
    }

    this.http.post(BaseURL + 'stations/', args)
    .subscribe(
      data => {
        for (const station of data['stations']) {
          // Filter of stations by central
          if (this.relatedCentral !== null){
            if (this.relatedCentral == station.related_central){
              stations.push(station);
              this.getCentrals(station);
            }
          } else{
            stations.push(station);
            this.getCentrals(station);
          }
        }
        this.addDataStations(stations);      
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

  addDataStations(stations){
    for (const central of this.centrals) {      

      let args = {
        auth_token: this.authToken,
        central: central
      }

      this.http.post(BaseURL + 'central/last_datas/', args)
      .subscribe(
        data => {
          let datas = data as Array<any>;
          
          for (const d of datas) {
            let stationName = d['station']['name'];
            let stationData = d['data'];

            let station = stations.find(s => s.name === stationName);            
            station.data = stationData;
            this.stations.push(station);            
          }          
        }, 
        err => {
          console.log("Not good enough!");
          
        }
      );        
    }

  }
}
