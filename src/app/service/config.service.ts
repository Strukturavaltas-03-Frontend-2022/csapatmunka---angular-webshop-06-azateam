import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  constructor() { }
}
