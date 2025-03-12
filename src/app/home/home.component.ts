import { Component, OnInit } from '@angular/core';
import { MainShopCardComponent } from "../main-shop-card/main-shop-card.component";
import { SharedDataService } from '../shared-data.service';
import { SmallShopCardComponent } from "../small-shop-card/small-shop-card.component";
import { DarkmodeService } from '../darkmode.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MainShopCardComponent, SmallShopCardComponent,]
})
export class HomeComponent implements OnInit{
  constructor(public sd:SharedDataService, public ds: DarkmodeService){}
  
  ngOnInit(): void {
    this.delayedCall()
  }
  delayedCall(): void {
    this.delay(0).then(() => {
      this.callAfterDelay();
    });
  }

  async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  callAfterDelay(): void {
    if(this.ds.isDarkmode){this.ds.goDark()}
    // Hier können Sie den Code einfügen, den Sie nach der Verzögerung ausführen möchten
  }
}
