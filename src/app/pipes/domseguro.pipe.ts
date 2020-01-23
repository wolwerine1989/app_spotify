import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {

    const url = ' https://open.spotify.com/embed?uri=';

    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  //domSanitizer= Este objeto permite verificar que el codigo no sea malicioso para la aplicacion 
  }

}
