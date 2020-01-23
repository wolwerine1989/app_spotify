import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items:any[] = [];

    //AQUI MANDO LAS REDIRECCIONES CUANDO SE PRESIONE EN UN ARTISTA MEDIANTE UN ROUTER
  constructor(private router: Router) { 

  }

    //CUANDO PRESIONE EN UN ARTISTA ME REDIRECCIONARA A LA PAGINA OFICIAL DEL ARTISTA
    //ESTE CODIGO DE ABAJO ES VALIOSO =P
  verArtista (item : any){

    let artistaId;

    if( item.type === 'artist'){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId ]);
  }
}
