import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginLocalDataService {

  constructor() {
    return;
  }

  getUserData(user) {
    if (!user) {
      return;
    }

    if (!user.username) {
      return;
    }

    const email = 'blah@blah.com';
    return { username: user.username, email,  }
  }

}
