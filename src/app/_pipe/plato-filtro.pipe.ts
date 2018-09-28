import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'platoFiltro'
})
export class PlatoFiltroPipe implements PipeTransform {

  transform(array: any[], query: string): any {

    if(query){
      
      return _.filter(array, row => (row.nombre).toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
    return array;
  }

}
