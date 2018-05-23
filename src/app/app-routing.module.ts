import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'matricula', component: MatriculaComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
