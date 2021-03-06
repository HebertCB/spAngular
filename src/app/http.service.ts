import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://colegio-http.firebaseio.com/profesores/.json')
    .pipe(map((response: Response)=> response.json()))    
  }

  sendDatos(usuario: any){
    const datos = JSON.stringify(usuario);
    return this.http.post('https://colegio-http.firebaseio.com/profesores/.json',datos)
    .pipe(map((response: Response)=> response.json()))  
  }

}
