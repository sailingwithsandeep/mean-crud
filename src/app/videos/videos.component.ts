import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  video= {
    _id:"",
    title:"",
    desc:"",
    posted_by:"",
    cat:"",
    likes:"",
    url:"",
  }
  p=1;
  title="";

  videos: any;
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.getVideos().subscribe(res=>{
      this.videos = res;
      this.videos.forEach((element: { [x: string]: boolean; }) => {
        element['isEdit']=false;
      });
    });
  }

  edit(video: { isEdit: boolean; }){
    video.isEdit = true;
  }

  cancel(video: { isEdit: boolean; }){
    video.isEdit = false;
  }

  update(video: any){
    this._authService.updateVideo(video).subscribe(res =>{
      video.isEdit = false;
    })
  }

  delete(id: any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your record has been deleted.',
          'success'
        )
        this._authService.deleteVideo(id).subscribe(res=>{});
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }

  searchTitle(){
    if (this.title!="") {
      this.videos = this.videos.filter((res: { title: string; })=>{
        return res.title.toLocaleLowerCase().match(this.title);
      })
    }else{
      this.ngOnInit();
    }
  }

  key= '_id';
  reverse:boolean = false;
  sort(key: string){
    this.key=key;
    this.reverse = !this.reverse;
  }
}
