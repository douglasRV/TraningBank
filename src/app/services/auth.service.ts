import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {

    const token = localStorage.getItem('cadastro');

    console.log(token);
    
    return token ? true : false;
  }
}
