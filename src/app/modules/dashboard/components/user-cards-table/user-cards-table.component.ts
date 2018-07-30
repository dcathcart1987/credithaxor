import { Component, OnInit } from '@angular/core';

//local service imports
import { UserCardsTableLocalDataService } from '../../services/user-cards-table-local-data.service';

@Component({
  selector: 'user-cards-table',
  templateUrl: './user-cards-table.component.html',
  styleUrls: ['./user-cards-table.component.css']
})
export class UserCardsTableComponent implements OnInit {
  public cards = [];

  constructor(private _localDataSource: UserCardsTableLocalDataService) {}

  ngOnInit() {
    this.getCardData();
  }

  getCardData() {
    this._localDataSource.getUserCardsData().subscribe(
      (success) => {

        console.log(success);

        if (!success || !success.activeCards) {
          return;
        }
        this.cards = success.activeCards;
      },
      (failure) => {
        console.log(failure);
      }
    );
  }

}
