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

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    this.id = 0;
    this.status = "up";
    this.relatedCentral = null;
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      console.log(this.route.snapshot.queryParamMap);
      
      this.relatedCentral = this.route.snapshot.paramMap.get('central')
      this.stations = this.loadStations();
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
          if (this.relatedCentral !== null){
            if (this.relatedCentral == station.related_central){
              stations.push(station);
            }
          } else{
            stations.push(station);
          }
        }      
      }, 
      err => {
        console.log("Not good enough!");
        
      }
    );
    
    return stations;
  }

}
