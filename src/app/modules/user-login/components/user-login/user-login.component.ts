import { Component } from '@angular/core';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  title = 'Account Login';
  userFormSubmission;

  submitUserForm() {
    console.log('Form Submitted');
  }
}
