import { Component, HostListener, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DarkmodeService } from '../darkmode.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShopCardPopupServiceService } from '../shop-card-popup-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  constructor(public ds: DarkmodeService, public pop: ShopCardPopupServiceService, public router: Router){}

  hideBadge(){
    if(this.pop.orderId.length == 0){
      return true;
    }else{
      return false;
    }
  }

  goTo(site: string){
    if(this.pop.isAuth == true){
    this.router.navigate([site]);
    }
  }

}
