import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'https://gestihotels.mugan86.com/';
  constructor(private _http: HttpClient) {
    console.log('Login Service running');
  }

  private getQuery(query: String) {
    return this._http.get(`${this.API_URL}${query}`);
  }

  getAll() {
    return this.getQuery('api/hotels').pipe(map(data => data));
  }

  getSelectItem(id: number) {
    return this.getQuery(`api/hotels/${id}`).pipe(map(data => console.log(data)));
  }

  setLogin(login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Login>(`${this.API_URL}login_check`, login, httpOptions).pipe(
      map(res => {
        return res;
      }));
  }
}
