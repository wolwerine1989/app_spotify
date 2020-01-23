import { Component, OnInit } from '@angular/core';
//import { SpotifyService } from 'src/app/services/spotify.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

//AQUI ESTA BUSCANDO EL ARTISTA, MIENTRAS BUSCA EL ARTISTA APARECERA EL ICONO DE LOADING, UNA VEZ APARECIDO
//LA INFORMACION DEL ARTISTA, EL ICONO DESAPARECERA

export class SearchComponent {

    artistas: any[]=[];
    loading: boolean;

  constructor(private spotify: SpotifyService) {   
  }

  buscar ( termino : string ) {
    console.log("gola");
    console.log(termino);

      this.loading=true;
      this.spotify.getArtistas( termino )
        .subscribe( (data:any) =>{
          console.log(data);
          this.artistas = data;
          this.loading =false;
        })
  }

}