import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  API_URL = 'https://gestihotels.mugan86.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private _http: HttpClient) {
    console.log('Stay Service running');
  }

  getLast(page: number = 1) {
    const data = { token: 'd1a9356cbed83ecd0215afa478610c38', page: page };
    return this._http
      .post<any>(this.API_URL + 'api/eats/last', data, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res.items);
          return res;
        })
      );
  }
}
