import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarios : string[] = [];

  constructor() { }

  newUser(nombre : string){
    this.usuarios.push(nombre)
  }

  getUsers(){
    return this.usuarios;
  }
}
