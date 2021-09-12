import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './../components/pelicula/pelicula.component';
import { PeliculaRoutingModule } from './pelicula-routing.module';


@NgModule({
  declarations: [PeliculaComponent],
  imports: [
    CommonModule,
    PeliculaRoutingModule
  ]
})
export class PeliculaModule { }
