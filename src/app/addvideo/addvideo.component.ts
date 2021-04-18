import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  videoForm!: FormGroup;
  constructor(private _authService:AuthService,private _router:Router) {
    this.videoForm = new FormGroup({
      title:new FormControl(''),
      desc:new FormControl(''),
      posted_by:new FormControl(''),
      cat:new FormControl(''),
      likes:new FormControl(''),
      url:new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  //post video
  postVideo(){
      this._authService.postVideo(this.videoForm.value).subscribe(res=>{
        this._router.navigate(['/videos']);
      });
  }

}
