import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  private usuarios : string[] = [];

  constructor(private logServive : LogService, private dataService : DataService) { 
    this.usuarios = this.dataService.getUsers();
  }

  ngOnInit() { }

  onLog(valor){
    this.logServive.escribirLog(valor);
  }
  onNewUser(nombre){
    this.dataService.newUser(nombre);
  }

}
