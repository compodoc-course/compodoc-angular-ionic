import { Injectable } from '@angular/core';
import { CIRCUITS_URLS } from '../../constants/urls';
import { map } from 'rxjs/internal/operators/map';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {
  constructor(private request: RequestService) {}

  /**
   * Take select year circuits list
   * @param year select year circuits
   */
  listByYear(year) {
    console.log(year + CIRCUITS_URLS.SELECT);
    return this.request
      .getQuery(year + CIRCUITS_URLS.SELECT)
      .pipe(map(data => data['MRData'].CircuitTable.Circuits));
  }

  /**
   * Load circuits list take by local reference. In this case load 2018 circuits
   */
  loadListFromLocal() {
    return this.request
      .getJSON('./../../../assets/data/api/circuits2018.json')
      .pipe(map(data => data['MRData'].CircuitTable.Circuits));
  }
}
