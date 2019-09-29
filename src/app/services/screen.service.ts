import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  isLoginScreen:boolean = false;

  changeScreen(){ this.isLoginScreen = !this.isLoginScreen; }

  get loginScreen(){ return this.isLoginScreen; }

  constructor() { }
}
