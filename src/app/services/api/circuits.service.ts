import { Injectable } from '@angular/core';
import { CIRCUITS_URLS } from '../../constants/urls';
import { map } from 'rxjs/internal/operators/map';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {
  constructor(private request: RequestService) {}

  listByYear(year) {
    console.log(year + CIRCUITS_URLS.SELECT);
    return this.request
      .getQuery(year + CIRCUITS_URLS.SELECT)
      .pipe(map(data => data['MRData'].CircuitTable.Circuits));
  }
}
