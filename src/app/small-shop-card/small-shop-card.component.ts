import { Component, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShopCardPopupServiceService } from '../shop-card-popup-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-small-shop-card',
  standalone: true,
  imports: [MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule],
  templateUrl: './small-shop-card.component.html',
  styleUrl: './small-shop-card.component.scss'
})
export class SmallShopCardComponent {
  selectedExtras: string = '';

  constructor(public shopPopup: ShopCardPopupServiceService, private sbar: MatSnackBar){}

  @Input() img:string = ''

  @Input() titel:string = ''

  @Input() id:string = ''

  @Input() price:number = 0;

  openSnackBar(message: string) {
    const snackBarRef = this.sbar.open(message)
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000); // 2 Sekunden in Millisekunden
  }

  addtoCart(){
    this.shopPopup.orderId.push(this.id);
    this.shopPopup.orderName.push(this.titel);
    this.shopPopup.orderSos.push('/');
    this.shopPopup.orderSos1.push('/');
    this.shopPopup.orderSos2.push('/');
    this.shopPopup.orderSpecial.push(this.checkArrayExtras(this.selectedExtras));
    this.shopPopup.orderExtras.push("/");
    this.shopPopup.orderSize.push(0);
    this.shopPopup.orderMeat.push('/');
    this.shopPopup.orderPrice.push(this.price);
    this.selectedExtras = ''
    this.openSnackBar("Erfolgreich zum Warenkorb Hinzugefügt!")
   }

   chekout(){
    this.addtoCart();
    this.sbar.dismiss();
    this.shopPopup.openSettingsDialog()
   }
  
   checkArrayExtras(arr:string) {
    if (arr == '') {
        return "Keine Extras";
    } else {
        return arr;
    }
  }
}
