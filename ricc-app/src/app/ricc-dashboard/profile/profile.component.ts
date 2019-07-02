import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BaseURL } from '../../models/baseUrl';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  authToken: string;
  user: User;
  errors: string;
  
  constructor(private http: HttpClient, private router: Router) {
    this.errors = "";
  }

  ngOnInit() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    if(this.authToken == null){
      this.router.navigate(['/login']);
    } else {
      this.user = this.loadUserData()
    }
  }


  loadUserData(){
    let args = {
      "auth_token" : this.authToken
    }
    
    let user = new User;

    this.http.post(BaseURL + 'user/', args)
    .subscribe(
      data => {
        user.name = data['user']['name']
        user.username = data['user']['username']
        console.log(data);
        user.mac_address = data['user']['ricc_code']
        
      }, 
      err => {
        console.log("Um erro aconteceu");
        
      }
    );
    
    return user;
  }


  onSubmit(f: NgForm) {
    if (f.valid){
      let args = {
        "auth_token" : this.authToken,
        "name" : f.value.name,
        "username" : f.value.username

      }
  
      this.http.post(BaseURL + 'edit_user/', args)
      .subscribe(
        data => {         
          this.router.navigate(['/home']);

        }, 
        err => {
          if (err.error.message == "Invalid login information.") {
            this.errors = "As credenciais informadas não são válidas";            
          } else {
            this.errors = "Um erro inesperado aconteceu";
          }
        }
      );      
    }
  }
}
