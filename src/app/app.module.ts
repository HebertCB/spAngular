import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { MDLUpgrateElementDirective } from './mdl-upgrate-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatriculaComponent,
    ContactoComponent,
    NavbarComponent,
    ProfesoresComponent,
    MDLUpgrateElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule   
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
