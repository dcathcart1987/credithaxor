import { Injectable } from '@angular/core';
import { UserCardPersistedDataService } from '../../../services/user-card-persisted-data.service'
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class UserCardsTableLocalDataService {

  constructor(
    private _dataService: UserCardPersistedDataService
  ) {

  }

  getUserCardsData(): Observable<any> {
    return this._dataService.get([]);
  }

  getUserCardData(card) {

  }

}
