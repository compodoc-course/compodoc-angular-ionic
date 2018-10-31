import { Injectable } from '@angular/core';
import { URL_LOCALHOST } from '../../constants/urls';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';


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
  constructor(private _http: HttpClient) {}

  /**
   * Make GET Request
   * @param query Query to with select data to make GET request
   */
  getQuery(query: String) {
    return this._http.get(`${this.API_URL}${query}`);
  }

  /**
   * Make POST operation request
   * @param resourceUrl Request url
   * @param data info to send with POST
   */
  postQuery(resourceUrl: string, data: any) {
    return this._http
      .post(this.API_URL + resourceUrl, data, this.httpOptions)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }

  /**
   * Load JSON Files
   * @param path Path to ubicate select JSON File
   */
  public getJSON(path: string): Observable<any> {
    return this._http.get(path);
  }
}
