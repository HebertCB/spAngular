import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LogService } from '../log.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  animations: [
    trigger('animarLista', [
      state('agregado', style({ transform : 'translateX(0)' })),
      transition(':enter', [
        style({
          opacity : 0,
          transform : 'translateX(-100px)'
        }),
        animate('300ms ease-out')
      ])
    ])
  ]
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
  onNewUser(nombre, apellido){
    this.dataService.newUser(nombre, apellido);
  }

  onUpdate(){
    this.usuarios = this.dataService.getUsers();
  }

}
