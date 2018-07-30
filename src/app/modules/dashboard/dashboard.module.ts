import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

//External Imports
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

//Local Modules
import { DashboardRoutingModule } from './dashboard-routing.module';

//Local Components
import { DashboardComponent } from './dashboard.component'
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { UserCardsTableComponent } from './components/user-cards-table/user-cards-table.component';

//Local Services
import { UserCardsTableLocalDataService } from './services/user-cards-table-local-data.service';

//Application Services
import { UserCardPersistedDataService } from '../../services/user-card-persisted-data.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPanelComponent,
    UserCardsTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TabViewModule,
    TableModule
  ],
  providers: [
    UserCardsTableLocalDataService
  ],
  exports: [
    DashboardRoutingModule,
    DashboardComponent,
    DashboardPanelComponent,
    UserCardsTableComponent
  ]
})
export class DashboardModule { }
