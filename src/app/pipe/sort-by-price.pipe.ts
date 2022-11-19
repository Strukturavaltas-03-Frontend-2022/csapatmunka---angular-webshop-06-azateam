import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe<T extends { price: number }> implements PipeTransform {

  transform(value: T[], desc: boolean = true): T[] {
    if (desc)
      return value.sort((a: T, b: T) => b.price - a.price); //csökkenő
    else
      return value.sort((a: T, b: T) => a.price - b.price); //növekvő
  }

}


// ár szerint csökkenő sorrendben rendezve (lehet nővekvő is ha a paraméter false)