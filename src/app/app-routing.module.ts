import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  {
    path: 'star-war',    
    component: PeliculaComponent
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