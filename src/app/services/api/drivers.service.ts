import { Injectable } from '@angular/core';
import { DRIVERS_URLS } from '../../constants/urls';
import { RequestService } from './request.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  constructor(private request: RequestService) {}

  // https://ergast.com/api/f1/2008/drivers/<driver-id>/results.json
  // https://ergast.com/api/f1/2008/drivers/<driver-id>/results/<number-race>.json

  /**
   * Take select year drivers list
   * @param year select year drivers
   */
  listByYear(year) {
    console.log(year + DRIVERS_URLS.ALL_DRIVERS_SELECT);
    return this.request.getQuery(year + DRIVERS_URLS.ALL_DRIVERS_SELECT)
      .pipe(map(data => data['MRData'].DriverTable.Drivers));
  }

  /**
   * Load circuits list take by local reference. In this case load 2018 drivers
   */
  loadListFromLocal() {
    return this.request.getJSON('./../../../assets/data/api/drivers2018.json')
      .pipe(map(data => data['MRData'].DriverTable.Drivers));
  }
}
