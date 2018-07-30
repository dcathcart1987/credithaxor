import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component imports
import { Page404Component } from "./components/404/404.component";


const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component }
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
export class AppRoutingModule {}
