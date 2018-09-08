import { Injectable } from '@angular/core';
import { URL_LOCALHOST } from '../../constants/urls';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API_URL = URL_LOCALHOST;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private _http: HttpClient) { }

  getQuery(query: String) {
    return this._http.get(`${this.API_URL}${query}`);
  }

  postQuery(resourceUrl: string, data: any) {
    return this._http
      .post(this.API_URL + resourceUrl, data, this.httpOptions)
      .pipe(
        map(((res: any) => {
          console.log(res);
          return res;
        })
        ));
  }
}
