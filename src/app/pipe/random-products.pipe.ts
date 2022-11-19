import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomProducts'
})
export class RandomProductsPipe<T extends {}> implements PipeTransform {

  transform(value: T[], ...args: unknown[]): T[] {
    return value.sort(() => 0.5 - Math.random());
  }

}

// telefonok összekeverése