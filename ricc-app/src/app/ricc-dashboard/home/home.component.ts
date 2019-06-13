import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ricc-app';
  setup = false;
  outputText = '';

  constructor() { }

  ngOnInit() {
  }

  public sayMyName(name) {    
    this.outputText = "Seu nome é " + name;
  }


}
