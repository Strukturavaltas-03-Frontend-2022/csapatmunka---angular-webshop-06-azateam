import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

interface ITableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})


export class DataEditorComponent implements OnInit {

  productList: Product[] = this.productService.getAll();

  selectedProductId: number = 0;

  selectedProductForDelete: Product = new Product;

  phrase: string = '';

  filterKey: string = '';

  p: number = 1;

  columns: ITableColumn[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'catId',
      title: 'Category',
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'description',
      title: 'Description',
    },
    {
      key: 'image',
      title: 'Image file name and route',
    },
    {
      key: 'price',
      title: 'Price (HUF)',
    },
    {
      key: 'stock',
      title: 'Stock',
    },
    {
      key: 'featured',
      title: 'Featured?',
    },
    {
      key: 'active',
      title: 'Active?',
    }
  ];

  searchColumns: ITableColumn[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    if (this.selectedProductId === 0) {
      this.selectedProductId = product.id;
    }
    else {
      this.selectedProductId = 0;
    }
  }

  onUpdate(product: Product): void {
    //this.productService.update(product);
    this.selectedProductId = 0;
  }


  onSelectForDelete(product: Product): void {
    this.selectedProductForDelete = product;
  }

  onDelete(): void {
    //this.productService.remove(this.selectedProductForDelete);
    this.selectedProductId = 0;
  }
}
