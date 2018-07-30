import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { UserLoginComponent } from './components/user-login/user-login.component'


const appRoutes: Routes = [
  { path: 'login', component: UserLoginComponent }
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
export class UserLoginRoutingModule {}
