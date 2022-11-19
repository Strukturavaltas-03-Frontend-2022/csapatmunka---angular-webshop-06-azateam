import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { HighlightedProductsComponent } from './common/highlighted-products/highlighted-products.component';
import { SortByPricePipe } from './pipe/sort-by-price.pipe';
import { TopProductPipe } from './pipe/top-product.pipe';
import { RandomProductsPipe } from './pipe/random-products.pipe';
import { FeaturedProductPipe } from './pipe/featured-product.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    HighlightedProductsComponent,
    SortByPricePipe,
    TopProductPipe,
    RandomProductsPipe,
    FeaturedProductPipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'HUF' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
