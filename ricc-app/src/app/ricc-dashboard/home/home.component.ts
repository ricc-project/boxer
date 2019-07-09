import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, QueryList, AfterViewInit, ViewChildren, ComponentRef, Type } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Card } from '../../models/card';
import { Requests } from '../../utils/requests/requests'
import { GraphComponent } from '../../models/graph-types';
import { NgForm } from '@angular/forms';
import { Station } from '../../models/station';
import { Central } from '../../models/central';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  r: Array<any>;
  loadingText: string;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];


  @ViewChildren('cardView', {read: ViewContainerRef}) viewChilren: QueryList<ViewContainerRef>;

  constructor(private http: HttpClient, private router: Router, private resolver: ComponentFactoryResolver) {
    this.requests = new Requests(this.http);    
    this.cards = []
    this.graphComponent = new GraphComponent;
    this.loadingText = "CARREGANDO ...";
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
    }
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      const viewChild = this.viewChilren.toArray();
      let count = 0;
      
      for (const card of this.cards) {
        const componentFactory = this.resolver.resolveComponentFactory(card.card_type);        
        const componentRef = viewChild[count].createComponent(componentFactory);

        componentRef.instance['value'] = card.value;        
        componentRef.instance['central'] = card.central;
        componentRef.instance['station'] = card.station;
        componentRef.instance['title'] = card.description;
        componentRef.changeDetectorRef.detectChanges();
  
        count++;
      }

      this.loadingText = "";
    }, 6000);
  }

  onSubmit(f: NgForm) {
    if (f.valid){            
      let card = this.graphComponent.get(f.value.cardType);
      card.central = f.value.central;
      card.station = f.value.station;        
      this.requests.addNewCard(this.authToken, card);      
      window.location.reload();

    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
