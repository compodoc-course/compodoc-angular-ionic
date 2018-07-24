import { Injectable } from '@angular/core';
import { Config } from 'ngx-easy-table/src/app/ngx-easy-table/model/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  static _config: Config = {
    searchEnabled: false,
    headerEnabled: true,
    draggable: false,
    logger: false,
    orderEnabled: true,
    globalSearchEnabled: true,
    paginationEnabled: true,
    exportEnabled: false,
    clickEvent: false,
    selectRow: false,
    selectCol: false,
    selectCell: false,
    rows: 10,
    additionalActions: false,
    serverPagination: false,
    isLoading: false,
    detailsTemplate: false,
    groupRows: false,
    paginationRangeEnabled: true,
    collapseAllRows: false,
    checkboxes: false,
    resizeColumn: true,
    fixedColumnWidth: false,
    horizontalScroll: false,
    tableLayout: {
      style: 'normal',
      theme: 'normal',
      hover: true,
      borderless: false,
      striped: false,
    }
  };
}
