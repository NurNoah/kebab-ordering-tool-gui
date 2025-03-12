import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  isDarkmode:boolean = false;

  constructor() { }


  toggleDarkmode() {
    document.querySelector('html')?.classList.toggle('dark-mode');
    document.getElementById('headerBody')?.classList.toggle('dark-mode');
    document.getElementById('Doener')?.classList.toggle('dark-mode');
    document.getElementById('RollDoener')?.classList.toggle('dark-mode');
    document.getElementById('Pide')?.classList.toggle('dark-mode');
    document.getElementById('doenerbox')?.classList.toggle('dark-mode');
    document.getElementById('Pommes')?.classList.toggle('dark-mode');
    document.getElementById('Lahmacun_mit_Salat')?.classList.toggle('dark-mode');
    document.getElementById('Lahmacun_mit_Fleisch')?.classList.toggle('dark-mode');
    document.getElementById('Baklava')?.classList.toggle('dark-mode');
    document.getElementById('Cola')?.classList.toggle('dark-mode');
    document.getElementById('Cola_Light')?.classList.toggle('dark-mode');
    document.getElementById('Cola_Zero')?.classList.toggle('dark-mode');
    document.getElementById('Fanta')?.classList.toggle('dark-mode');
    document.getElementById('Uludag')?.classList.toggle('dark-mode');
    document.getElementById('Ayran')?.classList.toggle('dark-mode');
    document.getElementById('loginbody')?.classList.toggle('dark-mode');
    
    
    if (this.isDarkmode == false) {
      this.isDarkmode = true;
    } else {
      this.isDarkmode = false;
    }
  }

  goDark(){
    document.getElementById('Doener')?.classList.add('dark-mode');
    document.getElementById('RollDoener')?.classList.add('dark-mode');
    document.getElementById('Pide')?.classList.add('dark-mode');
    document.getElementById('doenerbox')?.classList.add('dark-mode');
    document.getElementById('Pommes')?.classList.add('dark-mode');
    document.getElementById('Lahmacun_mit_Salat')?.classList.add('dark-mode');
    document.getElementById('Lahmacun_mit_Fleisch')?.classList.add('dark-mode');
    document.getElementById('Baklava')?.classList.add('dark-mode');
    document.getElementById('Cola')?.classList.add('dark-mode');
    document.getElementById('Cola_Light')?.classList.add('dark-mode');
    document.getElementById('Cola_Zero')?.classList.add('dark-mode');
    document.getElementById('Fanta')?.classList.add('dark-mode');
    document.getElementById('Uludag')?.classList.add('dark-mode');
    document.getElementById('Ayran')?.classList.add('dark-mode');
  }
}
