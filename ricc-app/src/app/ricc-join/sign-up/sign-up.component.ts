import { Component, OnInit } from '@angular/core';
import { NgForm,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Auth } from '../../models/auth';
import { Router } from "@angular/router"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  user:  User;
  errors: string;

  constructor(private http: HttpClient, private auth: Auth, private router: Router) {
    this.user = new User();
    this.errors = "";
  }

  ngOnInit() {    
  }
  
  onSubmit(f: NgForm) {
    if ((f.valid) && f.value.password == f.value.cPassword) {
      this.user.username = f.value.email;
      this.user.password = f.value.password;
  
      this.http.post('http://localhost/signup/', this.user)
      .subscribe(
        data => {          
          this.auth.token = data['authentication_token'];
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
