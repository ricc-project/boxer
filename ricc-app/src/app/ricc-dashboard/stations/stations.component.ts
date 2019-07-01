import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Station } from '../../models/station';
import { Requests } from '../../utils/requests/requests';

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
  requests: Requests;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    this.requests = new Requests(this.http);
    this.relatedCentral = null;
    this.stations = [];
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else{
      this.relatedCentral = this.route.snapshot.paramMap.get('central')
      this.stations = this.requests.loadStations(this.authToken, this.relatedCentral);
      
    }
  }

}
