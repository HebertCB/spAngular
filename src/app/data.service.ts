import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarios : string[] = [];

  constructor(private httpService : HttpService) { }

  newUser(nombre : string){
    this.usuarios.push(nombre)
  }

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        data => {for(let profe of data) this.usuarios.push(profe.nombre+" "+profe.apellido);}
      )          
    return this.usuarios;
  }
}
