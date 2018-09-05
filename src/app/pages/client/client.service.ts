import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URL = 'https://gestihotels.mugan86.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private _http: HttpClient) {
    console.log('Client Service running');
  }

  private getQuery(query: String) {
    return this._http.get(`${this.API_URL}${query}`);
  }

  getAll(page: number = 1) {
    const data = { token: 'd1a9356cbed83ecd0215afa478610c38', page: page };
    return this._http
      .post<any>(this.API_URL + 'api/clients', data, this.httpOptions)
      .pipe(
        map(res => {
          console.log(res.items);
          return res;
        })
      );
  }

  getSelectItem(id: number) {
    const data = { token: 'd1a9356cbed83ecd0215afa478610c38', id: id };
    return this._http
      .post<Client>(this.API_URL + 'api/client', data, this.httpOptions)
      .pipe(
        map(((res: Client) => {
          console.log(res);
          return res;
        })
      ));
  }

  setClient(client: Client) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Client>(this.API_URL, client, httpOptions).pipe(
      map(res => {
        console.log(res.name);
        return res;
      }));
  }
}

