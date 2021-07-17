import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { IPost } from 'src/app/Shared/Shared';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  _url:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getPosts():Observable<IPost[]>
  {
    return this._http.get<IPost[]>(this._url);
  }
}
