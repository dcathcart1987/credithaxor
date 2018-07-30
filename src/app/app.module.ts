//Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";

//Application Modules
import { AppRoutingModule } from './app-routing.module'
import { UserLoginModule } from './modules/user-login/user-login.module'
import { DashboardModule } from './modules/dashboard/dashboard.module';

//Application Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Page404Component } from './components/404/404.component'

//Application Services
import { UserCardPersistedDataService } from './services/user-card-persisted-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    UserLoginModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [UserCardPersistedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
