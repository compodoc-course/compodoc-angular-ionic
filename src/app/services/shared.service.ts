import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectPage: string;
  constructor() {}

  @Output()
  change: EventEmitter<string> = new EventEmitter();

  setSelectPage(page: string) {
    this.change.emit(page);
  }
}
