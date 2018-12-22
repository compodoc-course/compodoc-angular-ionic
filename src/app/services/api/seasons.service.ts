import { Injectable } from '@angular/core';
import { SEASONS_URLS } from '../../constants/urls';
import { RequestService } from './request.service';
import { map } from 'rxjs/internal/operators/map';

/**
 * Take select seasons all data
 */
@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  /**
   * @ignore
   * @param request Inject Requeste Service
   */
  constructor(private request: RequestService) {}

  /**
   * Take select url request list with seasons
   */
  list() {
    console.log(SEASONS_URLS.ALL_SEASONS_URL);
    return this.request
      .getQuery(SEASONS_URLS.ALL_SEASONS_URL)
      .pipe(map(data => data['MRData'].SeasonTable.Seasons));
  }

  /**
   * Load from local file in JSON format
   */
  loadListFromLocal() {
    return this.request
      .getJSON('./../../../assets/data/api/seasons.json')
      .pipe(map(data => data['MRData'].SeasonTable.Seasons));
  }
}
