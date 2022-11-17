import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-highlighted-products',
  templateUrl: './highlighted-products.component.html',
  styleUrls: ['./highlighted-products.component.scss']
})
export class HighlightedProductsComponent implements OnInit {

  @Input() highlightedProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
