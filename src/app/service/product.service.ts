import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

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
      //id15-id29

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




}