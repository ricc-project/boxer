import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, QueryList, ViewChild, AfterViewInit, ViewChildren, ComponentRef } from '@angular/core';
import { Router } from "@angular/router";
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Station } from '../../models/station';
import { Requests } from '../../utils/requests/requests'
import { SoilTemperatureCardComponent } from '../../graphics/soil/temperature-card/temperature-card.component';
import { AirTemperatureCardComponent } from '../../graphics/air/temperature-card/temperature-card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'ricc-app';
  authToken: string;
  stations: Array<Station>;
  relatedCentral: string;
  requests: Requests;
  cards: Array<any>;

  @ViewChildren('parent', {read: ViewContainerRef}) parent: QueryList<ViewContainerRef>;

  constructor(private http: HttpClient, private router: Router, private resolver: ComponentFactoryResolver) {
    this.requests = new Requests(this.http);
    this.relatedCentral = null;
    this.stations = [];
    this.cards = [SoilTemperatureCardComponent,  AirTemperatureCardComponent]
    console.log(this.cards);
     
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else {
      this.stations = this.requests.loadStations(this.authToken, this.relatedCentral);

    }
  }

  ngAfterViewInit() {
    const p = this.parent.toArray();
    let count = 0;
    
    for (const card of this.cards) {
      const f = this.resolver.resolveComponentFactory(card);
      const ref: ComponentRef<card> = p[count].createComponent(f);
      ref.instance.value = 10;
      ref.changeDetectorRef.detectChanges();
      count++;
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

}
