import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }

    getQuery (query:string){
      const url= `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        //AQUI HAY QUE CAMBIAR EL TOKEN/////
          'Authorization' : 'Bearer BQCZyt_ezKzPyazNcNj354TCTix_uETowEHAFMxx2-vq0VJynVMuNkfQ3LtfzdX26TrMFZdxa9MuOXkrmAQ'
                });
          return this.http.get(url,{headers});
    }



    getNewRealeases(){

        return this.getQuery('browse/new-releases?limit=40')
        .pipe(map(data =>data['albums'].items));
        // const headers = new HttpHeaders({
        //                   //AQUI HAY QUE CAMBIAR EL TOKEN/////
        //   'Authorization' : 'Bearer BQAkBSyn7C4tJJA12hGsHPFHkHxO9PHxosPcNiGCL7v1_Wh-ou9KYKNySki4ptOd5YT6wpujNNYu2O1RSHw'
        // });

          //AQUI ESTOY MANDANDO EL LIMITE DE CANCIONES, ESTE CASO 40

        //return  this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=40', {headers})
          
  }

    getArtistas (termino:string){
      console.log("gola");
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
        .pipe(map(data => data['artists'].items));



      // const headers = new HttpHeaders({
      //   //'Authorization': 'BQCu-jgxr5u5Xk9NxauhenOopdHdrW4xDEAEh8lnx2ORLrPp8uok6ymE9fkgAyu0PS3clCjjq95ohOSNVuL__1SZ2li7ThPpoCRSg485-5uZxCSQJf2YlqRh0vRf53-ojE0GCzQbdI3cZcqkGLvNJUHMHvPzG5kCOQ'
      //   'Authorization' : 'BQDEZUpWL544mwLdz98pY2uMWEEHM-PqGwZgtmG8jA_ig3zLo2GbS9ym9Qj86RhQGB0rci2mPc3zW8BPtwToB0aB8bvdNBftpvKfVpcTp3rpFmh8F3P5AXzhAuoMy1-4B3ystC5-NjukKoK5aIsFNM1MWIKiDUewgA'      });
         
      }

      getArtista (id:string){

        return this.getQuery(`artists/${id}`);
        //.pipe(map(data => data['artists'].items));
      }


      //aqui estoy extrayendo las 10 canciones mas famosas del artista, despliega un arreglo sobre otro 
      //arreglo, pero el pipe filtra los arrays y permite que salga solo en un array, mediante este 
      //servicio extraemos los datos que nos envia spotify
      getTopTracks ( id : string ){
        return this.getQuery(`artists/${ id }/top-tracks?country=us`)
        .pipe(map(data => data['tracks']));
      }
}
