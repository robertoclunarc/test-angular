import {Component, OnInit} from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';
import { ActorService } from './../../services/actor.service';
import {  actor } from './../../models/actor.model';
import {  pelicula } from './../../models/pelicula.model';
import { ActivatedRoute } from '@angular/router';


/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-participaciones',
  templateUrl: 'participaciones.component.html',
  styleUrls: ['participaciones.component.css'],
  providers: [PeliculaService, ActorService],
})
export class ParticipacionesComponent implements OnInit {   
    pelis: pelicula[]=[];    
    people: actor={};    
    urlActor: string;

    constructor(        
        private srvActores: ActorService,
        private srvPeliculas: PeliculaService,
        private actRouter: ActivatedRoute,
    ) { }

    async ngOnInit() {
        this.urlActor=this.actRouter.snapshot.params.url;
        await this.verDeatalle (); 
        await this.traerParticipaciones ();          
    }

    async verDeatalle (){		
		this.people = await this.srvActores.consultarActor(this.urlActor);
        console.log(this.people);
	} 

    async traerParticipaciones (){
        let pel: pelicula={}; 

        this.people.films?.forEach(f => {

            this.srvPeliculas.consultarPeli(f)
			
			.then(data => {
				
				this.pelis.push(data);
					
				console.log(data)
				
			});
            
        }) 
        
	} 

    verPeli(p:pelicula){
        console.log(p);
    }

    atras(){
        history.go(-1);
        return false;
    }
    
}