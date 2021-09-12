import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { pelicula, film} from './../../models/pelicula.model';
import { PeliculaService} from './../../services/pelicula.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-pelicula',
  styleUrls: ['./pelicula.component.css'],
  templateUrl: './pelicula.component.html',
  providers: [PeliculaService],
})

export class PeliculaComponent implements OnInit {
  displayedColumns: string[] = ['title', 'producer', 'director', 'release_date', 'ViewDet'];
  dataSource: MatTableDataSource<pelicula>;
  ELEMENT_DATA: film = {};

  constructor(private srvPeliculas: PeliculaService
		) { }

    async ngOnInit() {
      
      await this.listarPeliculas();
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.results);
     
    }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async listarPeliculas (){		
		this.ELEMENT_DATA = await this.srvPeliculas.consultarTodos();
    console.log(this.ELEMENT_DATA)
	}

  detalles(peli: pelicula){    
    console.log(peli.opening_crawl)
  }
}