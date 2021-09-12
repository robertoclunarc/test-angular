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
  ELEMENT_DATA: film = {/*
    count: 1, next: null, previous: null, results: [
      {
        title: 'title1',
        producer: 'productor1',
        director: 'director1',
        release_date: '1998-04-21',
        opening_crawl: 'fjkksdjfsd fkljlkd jhdjnd jhdojdka jhdjhasd qjhdjoanda ',
        url: 'http://jdbsfbdnmsdnn.com',
      },
      {
        title: 'title2',
        producer: 'productor2',
        director: 'director2',
        release_date: '1998-04-22',
        opening_crawl: 'fjkksdjfsd fkljlkd jhdjnd jhdojdka jhdjhasd qjhdjoanda ',
        url: 'http://jdbsfbdnmsdnn.com',
      },
      {
        title: 'title3',
        producer: 'productor3',
        director: 'director3',
        release_date: '1998-04-23',
        opening_crawl: 'fjkksdjfsd fkljlkd jhdjnd jhdojdka jhdjhasd qjhdjoanda ',
        url: 'http://jdbsfbdnmsdnn.com',
      },
      {
        title: 'title4',
        producer: 'productor4',
        director: 'director4',
        release_date: '1998-04-24',
        opening_crawl: 'fjkksdjfsd fkljlkd jhdjnd jhdojdka jhdjhasd qjhdjoanda ',
        url: 'http://jdbsfbdnmsdnn.com',
      }
    ]
   */
  };

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
}