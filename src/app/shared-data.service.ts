import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  img = [
    'assets/img/1doener1.png',
    'assets/img/2rolldoener1.png',
    'assets/img/3doenerbox.png',
    'assets/img/4pide.png',
    'assets/img/5pommes.png',
    'assets/img/6Lahmacun_Salat.png',
    'assets/img/6Lahmacun_Salat.png',
    'assets/img/8Baklava.png',
    'assets/img/9cola.png',
    'assets/img/10Cola_light.png',
    'assets/img/11Cola_zero.png',
    'assets/img/12Fanta.png',
    'assets/img/13Uludag.png',
    'assets/img/14Ayran.png',
  ]

  titel = [
    'Döner',
    'Roll Döner',
    'dönerbox',
    'Pide',
    'Pommes',
    'Lahmacun Salat',
    'Lahmacun Fleisch',
    'Baklava',
    'Cola',
    'Cola Light',
    'Cola Zero',
    'Fanta',
    'Uludag',
    'Ayran',
  ]

  price = [
    6.80,
    7.50,
    8.00,
    7.50,
    4.50,
    6.00,
    8.00,
    5.00,
    1.75,
    1.75,
    1.75,
    1.75,
    1.75,
    1.50,
  ]

  id = [
    'Doener',
    'RollDoener',
    'doenerbox',
    'Pide',
    'Pommes',
    'Lahmacun_mit_Salat',
    'Lahmacun_mit_Fleisch',
    'Baklava',
    'Cola',
    'Cola_Light',
    'Cola_Zero',
    'Fanta',
    'Uludag',
    'Ayran',
  ]
}
