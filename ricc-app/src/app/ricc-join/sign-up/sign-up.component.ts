import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Router } from "@angular/router";
import { BaseURL } from '../../models/baseUrl';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  user:  User;
  errors: string;
  authToken: string;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
    this.errors = "";
  }

  ngOnInit() {
    this.authToken = localStorage.getItem("authToken");
    if(this.authToken !== null){
      this.router.navigate(['/home']);
    }
  }
  
  onSubmit(f: NgForm) {
    if ((f.valid) && f.value.password == f.value.cPassword) {
      this.user.username = f.value.email;
      this.user.password = f.value.password;
  
      this.http.post(BaseURL + 'signup/', this.user)
      .subscribe(
        data => {          
          let authToken = data['authentication_token'];
          localStorage.setItem("authToken", JSON.stringify(authToken));
          this.router.navigate(['/home'])

        }, 
        err => {
          if (err.error.message == "username already taken") {
            this.errors = "E-mail já utilizado";            
          } else {
            this.errors = "Um erro inesperado aconteceu";
          }
        }
      );      
    }
  }

}
