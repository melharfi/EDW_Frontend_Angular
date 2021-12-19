import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token!:string;

  constructor() { }

  getToken() : string
  {
    return this.token;
  }

  setToken(token:string)
  {
    this.token = token;
  }
}
