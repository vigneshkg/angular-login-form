import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { 
    
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup( {
    userName: new FormControl(''),
    password: new FormControl(''),
  } )

  submitData() {
    // window.alert("Welcome " + " !");
    let a =12;
    this.router.navigateByUrl('dashboard');
  }

}

