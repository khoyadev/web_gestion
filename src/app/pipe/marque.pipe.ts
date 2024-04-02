import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marque'
})
export class MarquePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
