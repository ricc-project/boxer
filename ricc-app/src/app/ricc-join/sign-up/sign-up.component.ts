import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  
  onSubmit(f: NgForm) {
    let user = new User();
    user.username = f.value.email;
    user.password = f.value.password;

    this.http.post('http://localhost/signup/', user)
    .subscribe(
      data => {
        console.log("data", data);
        return data;
      }, 
      err => {
        if (err.error.message == "username already taken") {
          console.log("username failed");          
        }

        if(err.error.message == "You need to send password and username.") {
          console.log("Not enough infos");
          
        } else {
          console.log("Something went wrong");
          
        }
        
      }
    );
  }
}
