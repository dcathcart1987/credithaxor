import { NgModule } from '@angular/core';

//External Imports
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

//Local Modules
import { UserLoginRoutingModule } from './user-login-routing.module'

//Local Components
import { UserLoginComponent } from './components/user-login/user-login.component';

//Local Services
import { UserLoginLocalDataService } from './services/user-login-local-data.service';


@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    UserLoginRoutingModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    UserLoginLocalDataService
  ],
  exports: [
    UserLoginRoutingModule,
    UserLoginComponent
  ]
})
export class UserLoginModule { }
