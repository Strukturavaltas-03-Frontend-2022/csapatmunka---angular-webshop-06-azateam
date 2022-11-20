import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //termékek listája a ProductService megfelelő metódusával lekérdezhető
  productList: Product[] = this.productService.getAll();

  featuredProducts: Product[] = this.productService.getFeatured(5);

  subProducts: Product[] = this.productService.getSubProducts(5);

  filterPhrase: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
