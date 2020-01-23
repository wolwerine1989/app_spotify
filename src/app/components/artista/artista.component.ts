import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista: any = {};
  TopTracks: any [] = [];
  loadingArtist:boolean;

  constructor( private router:ActivatedRoute, private spotify:SpotifyService) { 
    
  //AQUI DECLARO LA VARIABLE LOADING PARA CUANDO ENTRE A LA PAGINA DEL ARTISTA Y QUE SEA TRUE
  this.loadingArtist= true;

  //AQUI EXTRAIGO EL ID DEL ARTISTA
    this.router.params.subscribe( params => {
      this.getArtista( params ['id']);
      this.getTopTracks( params['id'])

        })
    }
          //ACA 
    getArtista(id:string){
      
      //AQUI LA VARIABLE INGRESA EN EL BUCLE Y COMIENZA EL CICLO
      this.loadingArtist=true;

      this.spotify.getArtista(id)
      .subscribe(artista=>{
        console.log(artista)
        this.artista=artista;

        //AQUI EL LOADING DESAPARECE CUANDO SE ASOME LA INFORMACION DEL ARTISTA
        this.loadingArtist=false;
      })
    }

    //Aqui estoy sacando las 10 canciones mas famosas del artista, es una funcion
    getTopTracks ( id:string ){

      this.spotify.getTopTracks(id)
        .subscribe(TopTracks =>{
          console.log(TopTracks);
          this.TopTracks = TopTracks;
        });
    }
}
