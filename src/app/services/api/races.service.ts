import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  private url = environment.url;
  constructor() {}

  // Race list of select season
  // https://ergast.com/api/f1/<year>.json

  // Select race info in select year
  // https://ergast.com/api/f1/<year>/<number-race>.json

  // ranking result of select race
  // https://ergast.com/api/f1/<year>/<number-race>/results.json
}
