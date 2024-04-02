import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorie'
})
export class CategoriePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
