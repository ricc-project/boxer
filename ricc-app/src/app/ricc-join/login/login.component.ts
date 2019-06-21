import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:  User;
  errors: string;
  authToken: string;

  constructor(private http: HttpClient, private router: Router) { 
    this.user = new User();
    this.errors = "";
  }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken == null){
      this.router.navigate(['/login']);
    }
  }
  onSubmit(f: NgForm) {
    if (f.valid){
      this.user.username = f.value.email;
      this.user.password = f.value.password;
  
      this.http.post('http://localhost/login/', this.user)
      .subscribe(
        data => {          
          let authToken = data['authentication_token'];
          localStorage.setItem("authToken", JSON.stringify(authToken));
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
