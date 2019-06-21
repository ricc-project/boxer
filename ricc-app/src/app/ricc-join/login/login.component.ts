import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:  User;
  errors: string;

  constructor(private http: HttpClient, private auth: Auth, private router: Router) { 
    this.user = new User();
    this.errors = "";
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.valid){
      this.user.username = f.value.email;
      this.user.password = f.value.password;
  
      this.http.post('http://localhost/login/', this.user)
      .subscribe(
        data => {          
          this.auth.token = data['authentication_token'];
          this.router.navigate(['/home'])

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
