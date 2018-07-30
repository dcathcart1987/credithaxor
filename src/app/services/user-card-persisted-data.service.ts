import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserCardPersistedDataService {

  private urls = {
    mockData: './assets/mock-data/credit-card-data.mock.json'
  }

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Gets User Card persisted data by list of id's provided
   * @param array id
   * @returns {Observable<Object>}
   */
  get(id) {
    const dataUrl = this.urls.mockData;

    return this._http.get(dataUrl);
  }

  set() {}
  add() {}
  remove() {}

}
