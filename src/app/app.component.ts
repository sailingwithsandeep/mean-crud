import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth';

  constructor(public _authService:AuthService){

  }

  logout(){
    this._authService.logout();
  }

}
