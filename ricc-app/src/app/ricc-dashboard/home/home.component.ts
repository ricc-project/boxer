import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Central } from '../../models/central';
import { BaseURL } from '../../models/baseUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ricc-app';
  authToken: string;
  centrals: Array<Central>;

  items = ['Zero', 'One', 'Two', 'Three'];

  constructor(private http: HttpClient, private router: Router) {
    this.centrals = [];
  }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  loadCentrals(){
    let centrals = []
    let args = {auth_token: this.authToken};

    this.http.post(BaseURL + 'centrals/', args)
    .subscribe(
      data => {
        for (const central of data['centrals']) {
          centrals.push(central);          
        }
      }, 
      err => {
        console.log("Um erro inesperado aconteceu!");
      }
    );
    
    return centrals;
  }

}
