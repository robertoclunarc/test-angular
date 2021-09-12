import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { PeliculaComponent } from '../components/pelicula/pelicula.component';

const routes: Routes  = [
  {
    path: 'film',
    component: PeliculaComponent
    
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ]
})
export class PeliculaRoutingModule { }
