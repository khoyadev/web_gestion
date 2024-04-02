import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produit'
})
export class ProduitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
