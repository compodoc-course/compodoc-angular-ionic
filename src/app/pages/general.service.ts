import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  API_URL = 'https://gestihotels.mugan86.com/';
  constructor( public _http: HttpClient ) {
    console.log('Initialize General Service');
  }

  getGETQuery(query: string) {
    return this._http.get(`${ this.API_URL }${ query }`);
  }
}
