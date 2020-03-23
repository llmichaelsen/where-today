import { users } from './../data/data';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  login(email, pass) {

    const user = users.find(el => el.email === email && el.password === pass);
    if (user) {
      localStorage.setItem('user', user.id.toString());
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }


  logout() {

    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getUser() {

    const id = parseInt(localStorage.getItem('user'), 10);
    return users.find(el => el.id === id);
  }

  isLogged(): boolean {

    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
