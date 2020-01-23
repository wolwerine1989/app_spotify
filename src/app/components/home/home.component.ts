import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
 /*paises:any [] = [];
 constructor( private http: HttpClient) {  
 this.http.get('https://restcountries.eu/rest/v2/lang/es')
 .subscribe( (resp:any) =>{this.paises=resp;
       console.log(resp);})
    }*/


    nuevasCanciones: any [] = [] ;

    loading:boolean;

    error:boolean;
    mensajeError: string;

  constructor (private spotify : SpotifyService){

    //AQUI DESPLEGA EL ICONO DE LOADING MAS LA VARIABLE DE ARRIBA
    this.loading= true ;
    this.error=false;

    this.spotify.getNewRealeases()
    .subscribe( (data : any )=>{
     this.nuevasCanciones = data;
      this.loading=false;
      },
      //  El comando Subscribe funciona en SUccess si funciona, sino error el cual desplega mensajes de error.
      //Aqui esta la funcion del mensaje de error  
          ( errorServicio )=>{

        this.loading = false;

        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      });
      
    }
}
