import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.apiUrl;

  entityName: string = 'products';

  constructor(
    private http: HttpClient,
  ) { }

  // Második felvonás adatok json-serverről
  // szerver indítása: json-server .\json\products.json
  // szűrők átkerültek pipe-kba

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(Product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}${this.entityName}`,
      Product
    );
  }

  update(Product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}${this.entityName}/${Product.id}`,
      Product
    );
  }

  remove(Product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}${this.entityName}/${Product.id}`
    );
  }

  removeByID(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}${this.entityName}/${id}`
    );
  }


  /*

    // Beégetett adatok és szúrések az első részhez
  
    // összes termék ár szerint rendezve
       getAll(): Product[] {
        return this.list
          .sort((a: Product, b: Product) => b.price - a.price);
      } 
  
    // n=5 db véletlen kiemelt termék -> home oldal
    getFeatured(n: number = 5): Product[] {
      return this.list
        .filter((item: Product) => item.featured == true)
        .sort(() => 0.5 - Math.random())
        .slice(0, n);
    }
  
    // n=5 db véletlen termék -> home oldal
    getSubProducts(n: number = 5): Product[] {
      return this.list
        .sort(() => 0.5 - Math.random())
        .slice(0, n);
    }
  
    // kategórák szerinti összes termék -> category oldal
    getCategory(categoryId: number): Product[] {
      return this.list
        .filter((item: Product) => item.catId == categoryId);
    }
  
    // n=5 db kiemelt véletlen termék adott kategóriában -> category oldal
    getFeaturedinCategory(categoryId: number, n: number = 5): Product[] {
      return this.list
        .filter((item: Product) => item.featured == true && item.catId == categoryId)
        .sort(() => 0.5 - Math.random())
        .slice(0, n);
    }
  
    // termékek listája
    list: Product[] =
    [
      {
        "id": 0,
        "catId": 1,
        "name": "iPhone 14 256 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2532 × 1170, OLED kijelző, 6 magos Apple A15 Bionic processzor, 256 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, iOS 16 operációs rendszer ",
        "image": "/assets/img/RI041c1-01.jpg",
        "price": 509990,
        "stock": 15,
        "featured": true,
        "active": true
      },
      {
        "id": 1,
        "catId": 1,
        "name": "iPhone 14 Plus 128 GB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2778 × 1284, OLED kijelző, 6 magos Apple A15 Bionic processzor, 128 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés 15W, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI042b2-01.jpg",
        "price": 499990,
        "stock": 4,
        "featured": true,
        "active": true
      },
      {
        "id": 2,
        "catId": 1,
        "name": "iPhone 14 128 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2532 × 1170, OLED kijelző, 6 magos Apple A15 Bionic processzor, 128 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer ",
        "image": "/assets/img/RI041b4-01.jpg",
        "price": 449990,
        "stock": 6,
        "featured": true,
        "active": true
      },
      {
        "id": 3,
        "catId": 1,
        "name": "iPhone 14 Plus 256GB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2778 × 1284, OLED kijelző, 6 magos Apple A15 Bionic processzor, 256 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI042c4-01.jpg",
        "price": 537090,
        "stock": 3,
        "featured": true,
        "active": true
      },
      {
        "id": 4,
        "catId": 1,
        "name": "iPhone 14 Pro 128 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2556 × 1179, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 6 GB RAM, 128 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés 15W, , iOS 16 operációs rendszer ",
        "image": "/assets/img/RI043b4-01.jpg",
        "price": 569990,
        "stock": 5,
        "featured": true,
        "active": true
      },
      {
        "id": 5,
        "catId": 1,
        "name": "iPhone 14 Pro Max 128 GB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2796 × 1290, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 128 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer ",
        "image": "/assets/img/RI044b2-01.jpg",
        "price": 629990,
        "stock": 8,
        "featured": true,
        "active": true
      },
      {
        "id": 6,
        "catId": 1,
        "name": "iPhone 14 Pro 256 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2556 × 1179, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 256 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer ",
        "image": "/assets/img/RI043c3-01.jpg",
        "price": 629990,
        "stock": 2,
        "featured": true,
        "active": true
      },
      {
        "id": 7,
        "catId": 1,
        "name": "iPhone 14 512 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2532 × 1170, OLED kijelző, 6 magos Apple A15 Bionic processzor, 512 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI041d3-01.jpg",
        "price": 629990,
        "stock": 12,
        "featured": true,
        "active": true
      },
      {
        "id": 8,
        "catId": 1,
        "name": "iPhone 14 Plus 512 GB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2778 × 1284, OLED kijelző, 6 magos Apple A15 Bionic processzor, 512 GB belső tárhely, 12 Mpx felbontású (f/1,5) + 12 Mpx felbontású (f/2,4), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI042d1-01.jpg",
        "price": 679990,
        "stock": 1,
        "featured": true,
        "active": true
      },
      {
        "id": 9,
        "catId": 1,
        "name": "iPhone 14 Pro Max 256 GB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2796 × 1290, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 256 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI044c4-01.jpg",
        "price": 689990,
        "stock": 16,
        "featured": true,
        "active": true
      },
      {
        "id": 10,
        "catId": 1,
        "name": "iPhone 14 Pro 512 GB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2556 × 1179, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 512 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI043d2-01.jpg",
        "price": 629990,
        "stock": 15,
        "featured": true,
        "active": true
      },
      {
        "id": 11,
        "catId": 1,
        "name": "iPhone 14 Pro Max 512 GBB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2796 × 1290, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 512 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI044d3-01.jpg",
        "price": 809990,
        "stock": 5,
        "featured": true,
        "active": true
      },
      {
        "id": 12,
        "catId": 1,
        "name": "iPhone 14 Pro 1TB",
        "description": "Mobiltelefon - 6,1-es kijelző, 2556 × 1179, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 1000 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI043e2-01.jpg",
        "price": 869990,
        "stock": 8,
        "featured": true,
        "active": true
      },
      {
        "id": 13,
        "catId": 1,
        "name": "iPhone 14 Pro Max 1TB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2796 × 1290, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 1000 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI044e1-01.jpg",
        "price": 929990,
        "stock": 2,
        "featured": true,
        "active": true
      },
      {
        "id": 14,
        "catId": 1,
        "name": "iPhone 14 Pro MaxG 1TB",
        "description": "Mobiltelefon - 6,7-es kijelző, 2796 × 1290, 120Hz, OLED kijelző, 6 magos Apple A16 Bionic processzor, 1000 GB belső tárhely, 48 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/1,78) + 12 Mpx felbontású (f/2,2), hátlapi kamera, optikai zoommal, 12 Mpx felbontású előlapi kamera, optikai képstabilizátor, GPS, Glonass, NFC, 4G (LTE), 5G, Lightning port, single + eSIM, IP68 védelem, kártyafüggetlen, gyorstöltés 15W, vezeték nélküli töltés, , iOS 16 operációs rendszer",
        "image": "/assets/img/RI044e3-01.jpg",
        "price": 929990,
        "stock": 4,
        "featured": true,
        "active": true
      },
      {
        "id": 15,
        "catId": 1,
        "name": "Samsung Galaxy S21 FE 128GB 6GB RAM Dual",
        "description": "Octa-core CPU, 128 GB memória, 6 GB RAM, 6.40 kijelző, 1080 x 2400 pixel, Dynamic AMOLED 2x, 12 MP + 8 MP + 12 MP-es kamera, 32 MP-es hátlapi kamera, 155.7 x 74.5 x 7.9 mm, 177 g",
        "image": "/assets/img/1200096.samsung-galaxy-s21-fe-256gb-8gb-ram-dual-sm-g990b.jpg",
        "price": 192000,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 16,
        "catId": 1,
        "name": "Samsung Galaxy S10+ 512GB Dual",
        "description": "Kijelző 6,4 3040 x 1440 Quad HD+ Dinamikus AMOLED, Processzor: Nyolcmagos AP Integrált kétmagos NPU-val, adaptív gyorstöltés, vezeték nélküli gyorstöltés 2.0, vezeték nélküli töltés, hátlapi főkamera 12 MP - f/1.5 & 2.4",
        "image": "/assets/img/557045331.samsung-galaxy-s10-512gb-dual-g975.jpg",
        "price": 380000,
        "stock": 14,
        "featured": true,
        "active": true
      },
      {
        "id": 17,
        "catId": 1,
        "name": "Samsung Galaxy S10e 128GB Dual",
        "description": "Octa-core CPU, 128 GB memória, 6 GB RAM, 5.80 kijelző, 12 MP + 16 MP-es kamera, 10 MP-es hátlapi kamera, 142.2 x 69.9 x 7.9 mm, 150 g",
        "image": "/assets/img/557286087.samsung-galaxy-s10e-128gb-dual-g970.jpg",
        "price": 175000,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 18,
        "catId": 1,
        "name": "Samsung Galaxy Note10 512GB Dual",
        "description": " Kijelző típusa Dynamic AMOLED, felbontás 3040 x 1440 (Quad HD+), processzor CPU típus, nyolcmagos, háttértár 512 GB, előlapi kamera 10 MP, hátlapi kamera 12/16/12MP + VGA, akkumulátor kapacitása 4300 mAh, 162.3 x 77.2 x 7.9 mm, 196 g",
        "image": "/assets/img/600879162.samsung-galaxy-note10-512gb-dual-sm-n975.jpg",
        "price": 400009,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 19,
        "catId": 1,
        "name": "Samsung Galaxy S20 128GB 8GB RAM Dual",
        "description": "Kijelző Dynamic AMOLED 2X, képernyő 3200 x 1440 pixel, belső tárhely 128GB, első kamera 10 MP, hátlapi kamera 12 MP, 152 mm x 69 mm x 8 mm, 0.43 kg",
        "image": "/assets/img/654985347.samsung-galaxy-s20-128gb-8gb-ram.jpg",
        "price": 190000,
        "stock": 14,
        "featured": true,
        "active": true
      },
      {
        "id": 20,
        "catId": 1,
        "name": "Samsung Galaxy A32 5G 128GB 4GB RAM Dual",
        "description": "Processzor MediaTek Dimensity 720 MT6853 8 magos, kijelző felbontás 1600 x 720 pixel, előlapi kamera 12MPx, hátlapi kamera 48MPx, 206g",
        "image": "/assets/img/778519911.samsung-galaxy-a32-5g-128gb-4gb-ram-dual-a326.jpg",
        "price": 99000,
        "stock": 14,
        "featured": true,
        "active": true
      },
      {
        "id": 21,
        "catId": 1,
        "name": "Samsung Galaxy S20 FE 5G 256GB 8GB RAM Dual",
        "description": "Processzor Qualcomm Snapdragon 865 8 magos, kijelző felbontás 2400 x 1080 pixel, hátlapi kamera 12+12+8MP, előlapi kamera 32MP, 190g",
        "image": "/assets/img/824912928.samsung-galaxy-s20-fe-5g-256gb-8gb-ram-dual-g781.jpg",
        "price": 188000,
        "stock": 14,
        "featured": true,
        "active": true
      },
      {
        "id": 22,
        "catId": 1,
        "name": "Samsung Galaxy A22 5G 128GB 4GB RAM",
        "description": "Hátlapi kamera 48 +5 +2MP, előlapi kamera 8MP, RAM:4GB, ROM:128GB, MicroSDXC, 5G, 5000mAh, Dual SIM, Wi-Fi 5/ac, Bluetooth, NFC, 203g,",
        "image": "/assets/img/927458994.samsung-galaxy-a22-5g-128gb-4gb-ram-a226f.jpg",
        "price": 89000,
        "stock": 34,
        "featured": true,
        "active": true
      },
      {
        "id": 23,
        "catId": 1,
        "name": "Samsung Galaxy S22 5g 128GB 8GB RAM",
        "description": "Processzor Exynos 2200, kijelző Dynamic AMOLED 2X, 120Hz, HDR10+, 1080 x 2340 pixel, előlapi kamera 10MPx, hátső kamera 50MPx, 167g",
        "image": "/assets/img/931302774.samsung-galaxy-s22-5g-128gb-8gb-ram-sm-s906.jpg",
        "price": 340000,
        "stock": 4,
        "featured": true,
        "active": true
      },
      {
        "id": 24,
        "catId": 1,
        "name": "Samsung Galaxy S22 Ultra 5g 256GB 12GB RAM",
        "description": "Processzor Samsung Exynos 2200 8 magos, kijelző  Kapacitív Dynamic AMOLED 2X, 3080 x 1440 pixel, előlapi kamera 40MPx, hátlapi kamera 108MPx, 228g",
        "image": "/assets/img/931303182.samsung-galaxy-s22-ultra-5g-256gb-12gb-ram-sm-s908b.jpg",
        "price": 408000,
        "stock": 44,
        "featured": true,
        "active": true
      },
      {
        "id": 25,
        "catId": 1,
        "name": "Samsung Galaxy A03 64GB 4GB RAM Dual",
        "description": "Processzor Unisoc ums9230 Octa-core (2x1.6 GHz & 6x1.6 GHz), előlapi kamera 5MP, hátlapi kamera 48MP/2MP, 196g",
        "image": "/assets/img/945569505.samsung-galaxy-a03-64gb-4gb-ram-dual-a035.jpg",
        "price": 65000,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 26,
        "catId": 1,
        "name": "Samsung Galaxy A13 64GB 4GB RAM Dual",
        "description": "Processzor Exynos 850, kijelző PLS, 720 x 1600, tárhely 64GB, kamera felbontása 50Mpx, 195g",
        "image": "/assets/img/999148983.samsung-galaxy-a13-64gb-4gb-ram-dual-sm-a137f.jpg",
        "price": 60000,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 27,
        "catId": 1,
        "name": "Samsung Galaxy Z Fold4 5G 1TB 12GB RAM Dual",
        "description": "Processzor Qualcomm SM8475 Snapdragon 8+ Gen 1 (4nm), kijelző Foldable Dynamic AMOLED 2X, 1812 x 2176 pixel, hátlapi kamera 50MP, előlapi kamera 10MP, 263g",
        "image": "/assets/img/1013513559.samsung-galaxy-z-fold4-5g-1tb-12gb-ram-dual-f936.jpg",
        "price": 900000,
        "stock": 24,
        "featured": true,
        "active": true
      },
      {
        "id": 28,
        "catId": 1,
        "name": "Samsung Galaxy Z Flip4 5G 512GB 8GB RAM Dual",
        "description": "Processzor Qualcomm SM8475 Snapdragon 8+Gen 1 nyolcmagos, tárhely 512GB, kijelző Dynamic AMOLED 2X, 2640 x 1080 pixel, hátlapi kamera 12MP, előlapi kamera 10MP",
        "image": "/assets/img/1013515821.samsung-galaxy-z-flip4-5g-512gb-8gb-ram-dual-f721.jpg",
        "price": 318000,
        "stock": 14,
        "featured": true,
        "active": true
      },
      {
        "id": 29,
        "catId": 1,
        "name": "Samsung Galaxy S8 64GB",
        "description": "Samsung Exynos 8895, 8 magos, tárhely 64GB, Super AMOLED 1440 x 2960, hátsó kamera 12MP, előlapi kamera 8MP, 68.1 x 8 x 148.99mm, 155g",
        "image": "/assets/img/res_d3d6de0d20c173972204e4cd35decb55.jpg",
        "price": 123000,
        "stock": 4,
        "featured": true,
        "active": true
      },
      {
        "id": 30,
        "catId": 2,
        "name": "Alcatel 1068",
        "description": "ALCATEL 1068 SingleSIM Fekete Kártyafüggetlen Mobiltelefon",
        "image": "/assets/img/alcatel1068.png",
        "price": 4490,
        "stock": 25,
        "featured": false,
        "active": false
      },
      {
        "id": 31,
        "catId": 2,
        "name": "Blaupunkt FL07",
        "description": "Blaupunkt FL07 mobiltelefon, kék kártyafüggetlen, magyar menüs (FL07)",
        "image": "/assets/img/blaupunkt-fl07.jpg",
        "price": 4490,
        "stock": 11,
        "featured": false,
        "active": true
      },
      {
        "id": 32,
        "catId": 2,
        "name": "Blaupunkt FM 03i",
        "description": "Blaupunkt FM03i mobiltelefon, kártyafüggetlen, Dual SIM, kék",
        "image": "/assets/img/blaupunkt-fm03i.jpg",
        "price": 5985,
        "stock": 4,
        "featured": false,
        "active": true
      },
      {
        "id": 33,
        "catId": 2,
        "name": "Maxcom Classic MM135",
        "description": "Maxcom Classic MM135 Klasszikus mobiltelefon, Dual SIM, Fekete/Kék",
        "image": "/assets/img/maxcom-MM135.png",
        "price": 6090,
        "stock": 9,
        "featured": false,
        "active": true
      },
      {
        "id": 34,
        "catId": 2,
        "name": "Maxcom MM471 ",
        "description": "Maxcom MM471 mobiltelefon, dual sim-es kártyafüggetlen, extra nagy gombokkal, vészhívóval fehér (magyar nyelvű menüvel)",
        "image": "/assets/img/maxcom-mm471.jpg",
        "price": 14485,
        "stock": 15,
        "featured": true,
        "active": true
      },
      {
        "id": 35,
        "catId": 2,
        "name": "myPhone Classic+",
        "description": "myPhone Classic+ 3G Mobiltelefon",
        "image": "/assets/img/myphone-classic.jpg",
        "price": 11399,
        "stock": 4,
        "featured": false,
        "active": false
      },
      {
        "id": 36,
        "catId": 2,
        "name": "Navon Classic",
        "description": "Navon Classic Mobiltelefon, Dual SIM, 32MB, Ezüst (NAVONCLASSIC)",
        "image": "/assets/img/navon-classic.jpg",
        "price": 6990,
        "stock": 7,
        "featured": false,
        "active": true
      },
      {
        "id": 37,
        "catId": 2,
        "name": "Navon Mizu BT-70",
        "description": "Navon BT70 mobiltelefon, fekete, kártyafüggetlen, magyar menüs (BT70)",
        "image": "/assets/img/navon-mizu.jpg",
        "price": 4990,
        "stock": 0,
        "featured": true,
        "active": true
      },
      {
        "id": 38,
        "catId": 2,
        "name": "Navon X20",
        "description": "Navon X20 DualSIM Fekete Kártyafüggetlen Mobiltelefon",
        "image": "/assets/img/navon-x20.jpg",
        "price": 15999,
        "stock": 0,
        "featured": true,
        "active": true
      },
      {
        "id": 39,
        "catId": 2,
        "name": "Nokia 105",
        "description": "Nokia 105 (2019) TA-1203 single sim fekete mobiltelefon",
        "image": "/assets/img/nokia-105.jpg",
        "price": 6780,
        "stock": 9,
        "featured": false,
        "active": true
      },
      {
        "id": 40,
        "catId": 2,
        "name": "Nokia 210",
        "description": "Nokia 210 Dual SIM kártyafüggetlen mobiltelefon fekete",
        "image": "/assets/img/nokia-210.jpg",
        "price": 13990,
        "stock": 11,
        "featured": false,
        "active": true
      },
      {
        "id": 41,
        "catId": 2,
        "name": "Sencor Element P013",
        "description": "Sencor Element P013 Dual-Sim mobiltelefon fekete",
        "image": "/assets/img/sencor-element-p013.jpg",
        "price": 8180,
        "stock": 1,
        "featured": true,
        "active": true
      },
      {
        "id": 42,
        "catId": 2,
        "name": "Ulefone Armor Mini 2",
        "description": "Smartphone Ulefone Armor Mini 2 (dark grey) ",
        "image": "/assets/img/ulefone-armor-mini-2.jpeg",
        "price": 18780,
        "stock": 4,
        "featured": true,
        "active": true
      },
      {
        "id": 43,
        "catId": 2,
        "name": "Maxcom MM139",
        "description": "Maxcom MM139 mobiltelefon, dual sim-es kártyafüggetlen, bluetooth-os, fm rádiós kék (magyar",
        "image": "/assets/img/maxcom-mm139.jpg",
        "price": 9485,
        "stock": 7,
        "featured": false,
        "active": false
      },
      {
        "id": 44,
        "catId": 2,
        "name": "L8star BM10",
        "description": "L8star BM10 nano méretű Mobiltelefon - szürke",
        "image": "/assets/img/l8star-bm10.jpg",
        "price": 7249,
        "stock": 3,
        "featured": false,
        "active": true
      },
      {
        "id": 45,
        "catId": 2,
        "name": "Nokia 8210 4G Dual",
        "description": "Az új Nokia 8210 4G tisztelgés a klasszikusok előtt, merész formatervezéssel, élénk színekben, ráadásul új funkciókkal és hangrendszerrel felszerelve. A beépített kamerával megörökítheted a legszebb pillanatokat, majd könnyedén megoszthatod őket a szeretteiddel.",
        "image": "/assets/img/Nokia_8210_4G_Dual.JPG",
        "price": 34490,
        "stock": 10,
        "featured": false,
        "active": true
      },
      {
        "id": 46,
        "catId": 2,
        "name": "myPhone Hammer 5 Smart Dual",
        "description": "Strapabíró kivitel, hagyományos kialakítás, LTE és WiFi-megosztás.",
        "image": "/assets/img/myPhone_Hammer_5_Smart_Dual.JPG",
        "price": 32999,
        "stock": 12,
        "featured": false,
        "active": true
      },
      {
        "id": 47,
        "catId": 2,
        "name": "myPhone Hammer Patriot",
        "description": "A HAMMER Patriot egy egyedi kialakítású ütésálló mobiltelefon készülék 2,4″ méretű kijelzővel, ergonomikus kialakítással és egyedi, lengyel designal. ",
        "image": "/assets/img/myPhone_Hammer_Patriot.JPG",
        "price": 26420,
        "stock": 8,
        "featured": true,
        "active": true
      },
      {
        "id": 48,
        "catId": 2,
        "name": "Nokia 3310 Dual (2017)",
        "description": "A Nokia 3310 (2017) kultikus alakja a nagy előd Nokia 3310-re emlékeztet. Azon kívül, hogy jól néz ki, intuitív felhasználói felületet kínál. A 2.4 collos polarizált, kerekített kijelző kiválóan látható erős napfényben is.",
        "image": "/assets/img/Nokia_3310_Dual_(2017).JPG",
        "price": 25190,
        "stock": 21,
        "featured": false,
        "active": true
      },
      {
        "id": 49,
        "catId": 2,
        "name": "Nokia 6310 (2021)",
        "description": "Az új Nokia 6310-et 2021-re újragondoltuk, nagyobb gombokkal és 2,8 hüvelykes, ívelt képernyővel érkezik.",
        "image": "/assets/img/Nokia_6310_(2021).JPG",
        "price": 24999,
        "stock": 14,
        "featured": false,
        "active": true
      },
      {
        "id": 50,
        "catId": 2,
        "name": "Nokia 230 Dual",
        "description": "Gyönyörű kialakítású és selfie-re kész, a Nokia 230 Dual SIM 2MP-es LED vakus előlre néző kamerával és homokfúvással készült aluminium hátós borítással megfelelő társ a mindennapokra.",
        "image": "/assets/img/Nokia_230_Dual.JPG",
        "price": 24120,
        "stock": 11,
        "featured": true,
        "active": true
      },
      {
        "id": 51,
        "catId": 2,
        "name": "myPhone Hammer 4",
        "description": "A myPhone Hammer 4 2,8 hüvelykes színes kijelzője 320 x 240 px felbontású, és olvasható betűkkel és nagy ikonokkal rendelkezik a könnyű használat érdekében. A különálló, háttérvilágítással ellátott gombok szintén megkönnyítik a munkát.",
        "image": "/assets/img/myPhone_Hammer_4.JPG",
        "price": 22999,
        "stock": 14,
        "featured": false,
        "active": false
      },
      {
        "id": 52,
        "catId": 2,
        "name": "Nokia 5310 (2020)",
        "description": "Tarts lépést az élettel ennek a régi kedvencnek az újragondolt kiadásával. A nagy teljesítményű elülső dupla hangszórókkal zenét hallgathatsz az MP3-lejátszón1 és az FM-rádióban, és minden hívást tisztán fogsz hallani. Az akkumulátor üzemideje napokig gondoskodik arról, hogy kapcsolatban maradj.",
        "image": "/assets/img/Nokia_5310_(2020).JPG",
        "price": 22020,
        "stock": 21,
        "featured": false,
        "active": true
      },
      {
        "id": 53,
        "catId": 2,
        "name": "myPhone Hammer 3",
        "description": "A HAMMER 3 mind irodai, mind szélsőséges körülmények között jól működik. A nagy képernyő könnyű kezelhetőséget és a színek élénk visszaadását biztosítja.",
        "image": "/assets/img/myPhone_Hammer_3.JPG",
        "price": 19790,
        "stock": 32,
        "featured": true,
        "active": true
      },
      {
        "id": 54,
        "catId": 2,
        "name": "Nokia 225 4G Dual",
        "description": "Hozd ki a legtöbbet a Nokia 225 4G modern funkcióiból, mert immár megfizethető a 4G, így tiszták a hanghívások, többszereplős játékokkal játszhatsz, közösségi oldalakat és másokat használhatsz.",
        "image": "/assets/img/Nokia_225_4G_Dual.JPG",
        "price": 19490,
        "stock": 18,
        "featured": false,
        "active": true
      },
      {
        "id": 55,
        "catId": 2,
        "name": "myPhone Halo Q",
        "description": "A nagy és könnyen leolvasható 2,8 hüvelykes kijelző színes, egyszerűen kezelhető felületet biztosít. Mindent a nagy gombok segítségével állíthat besz.",
        "image": "/assets/img/myPhone_Halo_Q.JPG",
        "price": 18990,
        "stock": 3,
        "featured": false,
        "active": true
      },
      {
        "id": 56,
        "catId": 2,
        "name": "myPhone Maestro",
        "description": "A myPhone Maestro egy elegáns hagyományos mobiltelefon nagy 2,8 méretű képernyővel, 1000 mAh kapacitású akkumulátorral és 2 Mpx kamerával. Modern, vékony kialakításával stílusos megjelenést biztosít.",
        "image": "/assets/img/myPhone_Maestro.JPG",
        "price": 18400,
        "stock": 28,
        "featured": true,
        "active": true
      },
      {
        "id": 57,
        "catId": 2,
        "name": "myPhone Halo 3",
        "description": "A myPhone Halo 3 egy klasszikus mobiltelefon tiszta, 2,31 hüvelykes színes kijelzővel, nagy háttérvilágítású gombokkal és nagy teljesítményű LED-es zseblámpával.",
        "image": "/assets/img/myPhone_Halo_3.JPG",
        "price": 17490,
        "stock": 15,
        "featured": false,
        "active": true
      },
      {
        "id": 58,
        "catId": 2,
        "name": "myPhone Maestro 2",
        "description": "A myPhone Maestro 2 egy klasszikus telefon nagy, 2,8 hüvelykes képernyővel, amely rendkívüli benyomást kelt vékony, 9 mm-es mélyfekete burkolatával. 1000 mAh kapacitású akkumulátorral és kamerával rendelkezik. Elegáns és könnyen használható.",
        "image": "/assets/img/myPhone_Maestro_2.JPG",
        "price": 17090,
        "stock": 19,
        "featured": false,
        "active": false
      },
      {
        "id": 59,
        "catId": 2,
        "name": "myPhone Up",
        "description": "A myPhone Up egy klasszikus telefon a legjobb, elegáns változatában. A cég klasszikus modelljei közül a legnagyobb 3,2 hüvelykes képernyővel, fém hátlappal, több órányi beszélgetést biztosító akkumulátorral és USB-C-vel rendelkezik.",
        "image": "/assets/img/myPhone_Up.JPG",
        "price": 16939,
        "stock": 16,
        "featured": true,
        "active": true
      },
      {
        "id": 60,
        "catId": 2,
        "name": "Nokia 210 Dual",
        "description": "A Nokia 210 az Opera Mini webböngészővel a legegyszerűbb módon biztosítja az internethez való kapcsolódást. Gyors, könnyű és csökkentett adatmennyiséget használ",
        "image": "/assets/img/Nokia_210_Dual.JPG",
        "price": 15410,
        "stock": 13,
        "featured": false,
        "active": true
      },
      {
        "id": 61,
        "catId": 2,
        "name": "myPhone Halo C",
        "description": "A myPhone Halo azok számára ideális készülék, akik klasszikus telefont szeretnének több funkcióval. Ez a készülék rendelkezik színes kijelzővel, zenelejátszóval valamint az FM rádió is lehetséges.",
        "image": "/assets/img/myPhone_Halo_C.JPG",
        "price": 14999,
        "stock": 17,
        "featured": false,
        "active": false
      },
      {
        "id": 62,
        "catId": 2,
        "name": "Nokia 110 4G Dual",
        "description": "A telefon egyszerű, jól bevált dizájnnal és praktikus, klasszikus gombokkal rendelkezik, amelyekkel elgépelés nélkül írhatsz be szöveges üzenetet.",
        "image": "/assets/img/Nokia_110_4G_Dual.JPG",
        "price": 11990,
        "stock": 10,
        "featured": false,
        "active": true
      }
    ];
    */

}
