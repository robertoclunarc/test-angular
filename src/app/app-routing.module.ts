import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallesComponent } from './components/detalles/detalles.componet';
import { ParticipacionesComponent } from './components/participaciones/participaciones.component';

const routes: Routes = [
  {
    path: 'star-war',    
    component: PeliculaComponent
  },  
  {
    path: 'detalles/:url',
    component: DetallesComponent,
  },
  {
    path: 'participaciones/:url',
    component: ParticipacionesComponent,
  },
  {
    path: '**',
    component: PeliculaComponent, //Por seguridad si no consigue ninguna ruta
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }