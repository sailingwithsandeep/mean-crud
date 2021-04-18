import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private _authService:AuthService,private _router:Router) {
    this.registerForm = new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  registerUser(){
    this._authService.register(this.registerForm.value).subscribe(res=>{
      console.log(res); 
      this.registerForm.reset();
      this._router.navigate(['/login']);
    })
  }
}
