import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
