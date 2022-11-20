import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})


export class DataEditorComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();

  selectedProductId: number = -1;

  selectedProductForDelete: Product = new Product;

  phrase: string = '';

  filterKey: string = '';

  p: number = 1;

  currentHeader: string = 'id';
  sortColumn: string = 'id';
  sortDirect: string = 'increasing';
  sortIcon: string = 'fa fa-long-arrow-down';

  searchColumns: any[] = this.columnService.columns;

  newProduct: Product = new Product;

  constructor(
    private productService: ProductService,
    private columnService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    if (this.selectedProductId === -1) {
      this.selectedProductId = product.id;
    }
    else {
      this.selectedProductId = -1;
    }
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      () => this.productList$ = this.productService.getAll()
    );
    this.selectedProductId = -1;
  }


  onSelectForDelete(product: Product): void {
    this.selectedProductForDelete = product;
  }

  onDelete(): void {
    this.productService.remove(this.selectedProductForDelete).subscribe(
      () => this.productList$ = this.productService.getAll()
    );
    this.selectedProductId = 0;
  }

  // {
  //   "id": 0,
  //   "catId": 1,
  //   "name": "iPhone 14 256 GB",
  //   "description": "Mobiltelefon - 6,1-es kijelző, 2532 × 1170, OLED kijelző, 6 magos Apple A15 Bionic processzor, 256 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, iOS 16 operációs rendszer ",
  //   "image": "/assets/img/RI041c1-01.jpg",
  //   "price": 509990,
  //   "stock": 15,
  //   "featured": true,
  //   "active": true
  // },

  onCreate(product: Product): void {
    let newId: number = 0;
    this.productList$.subscribe(
      products => {
        products.forEach(product => product.id > newId ? newId = product.id : newId)
        product.id = newId + 1;
        this.productService.create(product).subscribe(
          () => this.productList$ = this.productService.getAll()
        );
      })
    this.newProduct = new Product;

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
