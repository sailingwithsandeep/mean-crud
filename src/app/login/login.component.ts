import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private _authService:AuthService,private _router:Router) {
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  loginUser(){
    this._authService.login(this.loginForm.value);
  }

}
