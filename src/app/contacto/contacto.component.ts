import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  miFormulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({      
      'nombre' : new FormControl('Anastacio', Validators.required),      
      'celular' : new FormControl('',Validators.required),
      'correo' : new FormControl('',Validators.required)
    });
  }

  enviarFormulario(){
    console.log(this.miFormulario);
  }

}
