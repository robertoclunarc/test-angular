import { people, actor } from './../models/actor.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ActorService {
	private url: string;	
	
	constructor(private http: HttpClient) {
		this.url = environment.apiUrl + 'people';
	}


	consultarTodos(): Promise<people> {

		return this.http.get<people>(this.url).toPromise();
	}	

	consultarActor(url: string): Promise<actor> {

		return this.http.get<actor>(url).toPromise();
	}

}