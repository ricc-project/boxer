import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'ricc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('theme') theme: string;   
  @Input('isLoggedIn') isLoggedIn: boolean;
  sidebarStatus: string;

  constructor(private router: Router) {
    this.sidebarStatus = "sidebar-open";
  }

  ngOnInit() {
  }

  changeSidebar(){
    if (this.sidebarStatus == "sidebar-partial") {
      this.sidebarStatus = "sidebar-open";
    } else{
      this.sidebarStatus = "sidebar-partial";  
    }
  }

  logout(){
    localStorage.removeItem("authToken");
    this.router.navigate(['/login'])
  }


}
