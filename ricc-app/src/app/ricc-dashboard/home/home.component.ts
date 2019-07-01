import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Station } from '../../models/station';
import { Requests } from '../../utils/requests/requests'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ricc-app';
  authToken: string;
  stations: Array<Station>;
  relatedCentral: string;
  requests: Requests;

  items = ['Zero', 'One', 'Two', 'Three'];

  constructor(private http: HttpClient, private router: Router) {
    this.requests = new Requests(this.http);
    this.relatedCentral = null;
    this.stations = [];
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else {
      this.stations = this.requests.loadStations(this.authToken, this.relatedCentral);
      console.log(this.stations);
      
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}
