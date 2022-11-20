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

  selectedProductId: number = -1;

  selectedProductForDelete: Product = new Product;

  phrase: string = '';

  filterKey: string = '';

  p: number = 1;

  currentHeader: string = 'id';
  sortColumn: string = 'id';
  sortDirect: string = 'increasing';
  sortIcon: string = 'fa fa-long-arrow-down';

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
      title: 'Image file path/name',
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
      title: 'Featured',
    },
    {
      key: 'active',
      title: 'Active',
    }
  ];

  searchColumns: ITableColumn[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    //this.productList.map(product => product.price = 1000)
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


  onColumnSelect(columnHeader: string): void {
    this.sortColumn = columnHeader;
    if (columnHeader !== this.currentHeader) {
      this.sortDirect = 'increasing';
      this.sortIcon = 'fa fa-long-arrow-up';
    }

    if (columnHeader == this.currentHeader) {
      if (this.sortDirect == 'increasing') {
        this.sortDirect = 'decreasing';
        this.sortIcon = 'fa fa-long-arrow-down';
      }
      else {
        this.sortDirect = 'increasing';
        this.sortIcon = 'fa fa-long-arrow-up';
      }
    }
    this.currentHeader = columnHeader;
  }
}
