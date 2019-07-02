import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, QueryList, ViewChild, AfterViewInit, ViewChildren, ComponentRef } from '@angular/core';
import { Router } from "@angular/router";
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../models/card';
import { Requests } from '../../utils/requests/requests'
import { GraphComponent } from '../../models/graph-types';
import { NgForm } from '@angular/forms';
import { Station } from '../../models/station';
import { Central } from '../../models/central';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  authToken: string;
  requests: Requests;
  centrals: Array<Central>;
  stations: Array<Station>;
  cards: Array<Card>;
  cardTypes : Array<Card>;
  graphComponent : GraphComponent;
  

  @ViewChildren('cardView', {read: ViewContainerRef}) viewChilren: QueryList<ViewContainerRef>;

  constructor(private http: HttpClient, private router: Router, private resolver: ComponentFactoryResolver) {
    this.requests = new Requests(this.http);    
    this.cards = []
    this.graphComponent = new GraphComponent;
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else {
      this.cardTypes = this.graphComponent.all();
      this.centrals = this.requests.loadCentrals(this.authToken);
      this.stations = this.requests.loadStations(this.authToken, null);
      this.cards = this.requests.loadCards(this.authToken);

      //FAZER PARA loadCards
      // this.stations = this.requests.loadStations(this.authToken, this.relatedCentral);
      // this.cards.push(this.graphComponent.get('last-solar-radiation'));
    }
  }

  ngAfterViewInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    this.cards = this.requests.loadCards(this.authToken);
    
    const viewChild = this.viewChilren.toArray();
    let count = 0;
    console.log("ASDF", this.cards);
    
    for (const card of this.cards) {
      console.log("here", card);
      
      let card_type = this.graphComponent.get(card.card_type);
      console.log("asdf", card_type);
      

      const componentFactory = this.resolver.resolveComponentFactory(card_type);
      const componentRef: ComponentRef<card_type> = viewChild[count].createComponent(componentFactory);

      //DUMP DATA NO CARD
      //CHAMADA NO REQUESTS

      componentRef.instance.value = 10;
      componentRef.changeDetectorRef.detectChanges();

      count++;
    }
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

  onSubmit(f: NgForm) {
    if (f.valid){
      console.log(f.value.cardType);
      let cardType = this.graphComponent.get(f.value.cardType);

      let message = {
        auth_token : this.authToken,
        card_type : cardType
      }
      
    }
  }

}
