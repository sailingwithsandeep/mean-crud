import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable,BehaviorSubject } from 'rxjs';
import { Video } from './video';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://videoapi2.herokuapp.com/api/";

  isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private _http: HttpClient, private _router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //register
  register(user: User): Observable<any> {
    return this._http.post<User>(this.url + "register", user);
  }

  //login
  login(user: User) {
    return this._http.post<User>(this.url + "login", user)
      .subscribe((res: any) => {
        localStorage.setItem('access-token', res.token);
        this._router.navigate(['/videos']);
      })
  }

  //post video
  postVideo(video: Video): Observable<Video> {
    return this._http.post<Video>(this.url + "video", video);
  }

  //update video
  updateVideo(video: Video): Observable<Video> {
    return this._http.patch<Video>(this.url + "video/" + video._id, video);
  }

  //delete video
  deleteVideo(_id: any): Observable<any> {
    return this._http.delete(this.url + "video/" + _id);
  }

  //to check user logged in or not
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access-token');
    return (authToken) !== null ? true : false;
  }

  //logout
  logout() {
    if (localStorage.removeItem('access-token') == null) {
      this._router.navigate(['/login']);
    }
  }

  //getVideos
  getVideos(): Observable<any> {
    return this._http.get(this.url + "videos", this.httpOptions);
  }

  //get the token from localStorage
  getAccessToken() {
    return localStorage.getItem('access-token');
  }

}
