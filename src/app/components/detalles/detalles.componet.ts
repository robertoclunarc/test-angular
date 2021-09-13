import {Component, OnInit} from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';
import { ActorService } from './../../services/actor.service';
import { pelicula } from './../../models/pelicula.model';
import { people, actor } from './../../models/actor.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-detalles',
  templateUrl: 'detalles.component.html',
  styleUrls: ['detalles.component.css'],
  providers: [PeliculaService, ActorService],
})
export class DetallesComponent implements OnInit {
    peli: pelicula={};
    people: people={};
    actores: actor[]
    urlPeli: string;

    constructor(
        private srvPeliculas: PeliculaService,
        private srvActores: ActorService,
        private actRouter: ActivatedRoute,
        private router: Router,
    ) { }

    async ngOnInit() {
        this.urlPeli=this.actRouter.snapshot.params.url;
        await this.verDeatalle ();
        await this.traerActores ();        
    }

    async verDeatalle (){		
		this.peli = await this.srvPeliculas.consultarPeli(this.urlPeli)
        
	}

    async traerActores (){
        let resPeople: Array <actor> =[];
        this.actores=[];		
		this.people = await this.srvActores.consultarTodos();
        if (this.people != undefined){
            resPeople = this.people.results!;

            resPeople.forEach ( resp => {
                resp.films?.forEach( f => {                   
                    if (f == this.urlPeli){
                        this.actores.push(resp) 
                                              
                    }
                })                
            });

            
        }
	}

    verActor(actor: actor){
        this.router.navigate(["participaciones", actor.url]);
    }

    /*drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.actores, event.previousIndex, event.currentIndex);
    }*/

    atras(){
        history.go(-1);
        return false;
    }
}