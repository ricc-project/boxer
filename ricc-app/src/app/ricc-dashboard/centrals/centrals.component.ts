import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Central } from '../../models/central';
import { Requests } from '../../utils/requests/requests'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-centrals',
  templateUrl: './centrals.component.html',
  styleUrls: ['./centrals.component.scss']
})
export class CentralsComponent implements OnInit {
  centrals: Array<Central>;
  authToken: string;
  changeStatusText: string;
  requests: Requests;

  constructor(private http: HttpClient, private router: Router) { 
    this.changeStatusText = "";
    this.requests = new Requests(this.http);
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }else{
      this.centrals = this.requests.loadCentrals(this.authToken);
    }


  }
}
