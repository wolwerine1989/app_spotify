import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {
      if (!images)
        return 'assets/img/noimage.png';

        if(images.length > 0){
          return images [0].url;
        } else {
          return 'assets/img/noimage.png';
        }

    return null;
  }

}

//EN ESTA CLASE ES PARA DESPLEGAR UN ERROR 404 O NO_IMAGEN, EN EL CASO QUE NO HUBIERA UNA IMAGEN QUE MOSTRAR