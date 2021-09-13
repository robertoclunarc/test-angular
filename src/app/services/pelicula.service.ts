import { pelicula, film } from './../models/pelicula.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PeliculaService {
	private url: string;	
	
	constructor(private http: HttpClient) {
		this.url = environment.apiUrl + 'films';
	}


	consultarTodos(): Promise<film> {

		return this.http.get<film>(this.url).toPromise();
	}

	consultarUno(film: number): Promise<pelicula> {

		return this.http.get<pelicula>(this.url + `/${film}`).toPromise();
	}

	consultarPeli(url: string): Promise<pelicula> {

		return this.http.get<pelicula>(url).toPromise();
	}

}