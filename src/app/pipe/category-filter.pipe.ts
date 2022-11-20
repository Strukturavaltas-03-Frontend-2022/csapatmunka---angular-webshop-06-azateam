import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe<T extends { catId: number }> implements PipeTransform {

  transform(value: T[], categoryId: number): T[] {
    return value.filter((item: T) => item.catId == categoryId);
  }

}

// kategória szűrése (1: okstelefon; 2: hagyományos telefonok)