import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredProduct'
})
export class FeaturedProductPipe<T extends { featured: boolean }> implements PipeTransform {

  transform(value: T[], bool: boolean = true): T[] {
    return value.filter((item: T) => item.featured == bool);
  }

}

// kiemelt elemek (featured) szűrése