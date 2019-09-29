import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  isLoginScreen:boolean = false;

  changeScreenLogin(){ this.isLoginScreen = true; }

  changeScreenMain(){ this.isLoginScreen = false; }

  get loginScreen(){ return this.isLoginScreen; }

  constructor() { }
}
