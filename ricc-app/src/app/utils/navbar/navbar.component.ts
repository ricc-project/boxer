import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ricc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('theme') theme: string;   
  currentURL = '';

  constructor() {
    this.currentURL = window.location.href;
  }

  ngOnInit() {
  }

}
