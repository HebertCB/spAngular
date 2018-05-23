import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  escribirLog(mensaje : string){
    console.log(mensaje);
  }
}
