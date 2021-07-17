import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Shared/Shared';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  _url:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http:HttpClient) { }

  getUsers():Observable<IUser[]>
  {
    return this._http.get<IUser[]>(this._url);
  }
}
