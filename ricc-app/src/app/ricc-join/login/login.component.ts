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

  constructor(private http: HttpClient, private auth: Auth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    let user = new User();
    user.username = f.value.email;
    user.password = f.value.password;

    console.log(user);
    

    this.http.post('http://localhost/login/', user)
    .subscribe(
      data => {
        console.log("data", data);
        console.log("passed here");
        
      },
      err => {
        console.log("error", err);
        console.log("passed");
        
      }
    );
  }
}
