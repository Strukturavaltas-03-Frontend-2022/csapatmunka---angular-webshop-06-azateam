import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topProduct'
})
export class TopProductPipe<T extends {}> implements PipeTransform {

  transform(value: T[], n: number = 5): T[] {
    return value.slice(0, n);
  }

}

// n=5 telefon kiemelése (n változatható paraméter)