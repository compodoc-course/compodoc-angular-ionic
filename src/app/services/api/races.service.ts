import { Injectable } from '@angular/core';
import { RACES_URLS } from '../../constants/urls';
import { RequestService } from './request.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  constructor(private request: RequestService) {}

  // Race list of select season
  // https://ergast.com/api/f1/<year>.json

  // Select race info in select year
  // https://ergast.com/api/f1/<year>/<number-race>.json

  // ranking result of select race
  // https://ergast.com/api/f1/<year>/<number-race>/results.json

  listByYear(year) {
    console.log(year + RACES_URLS.ALL_RACES_SELECT);
    return this.request
      .getQuery(year + RACES_URLS.ALL_RACES_SELECT)
      .pipe(map(data => data['MRData'].RaceTable.Races));
  }

  loadListFromLocal() {
    return this.request
      .getJSON('./../../../assets/data/api/races2018.json')
      .pipe(map(data => data['MRData'].RaceTable.Races));
  }
}
