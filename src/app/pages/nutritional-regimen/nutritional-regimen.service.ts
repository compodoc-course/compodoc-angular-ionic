import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class NutritionalRegimenService {
  API_URL = 'https://gestihotels.mugan86.com/';
  constructor(private _http: HttpClient) {
    console.log('Nutritional Regimen Service running');
  }

  private getQuery(query: String) {
    return this._http.get(`${this.API_URL}${query}`);
  }

  getAll() {
    return this.getQuery('api/nutritional').pipe(map(data => data));
  }

  getSelectItem(id: number) {
    return this.getQuery(`api/nutritional/${id}`).pipe(map(data => console.log(data)));
  }

  /*setHotel(hotel: Hotel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Hotel>(this.API_URL, hotel, httpOptions).pipe(
      map(res => {
        console.log(res.name);
        return res;
      }));
  }*/
}
