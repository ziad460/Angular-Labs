import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComments } from 'src/app/Shared/Shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  _url:string = "https://jsonplaceholder.typicode.com/posts/1/comments";
  constructor(private _http:HttpClient) { }

  getComments():Observable<IComments[]>
  {
    return this._http.get<IComments[]>(this._url);
  }

}
