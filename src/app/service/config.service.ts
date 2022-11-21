import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'aZaTeam Webshop';

  menuItems: IMenuItem[] = [
    { text: 'Kezdőlap', link: '/', icon: 'home' },
    { text: 'Okostelefonok', link: '/cat01' },
    { text: 'Hagyományos telefonok', link: '/cat02' },
    { text: 'Admin', link: '/admin' },
  ];

  columns: ITableColumn[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'catId',
      title: 'Kategória',
    },
    {
      key: 'name',
      title: 'Név',
    },
    {
      key: 'description',
      title: 'Leírás',
    },
    {
      key: 'image',
      title: 'Kép file neve',
    },
    {
      key: 'price',
      title: 'Ár (HUF)',
    },
    {
      key: 'stock',
      title: 'Készlet',
    },
    {
      key: 'featured',
      title: 'Kiemelt',
    },
    {
      key: 'active',
      title: 'Aktív',
    }
  ];

  constructor() { }
}
