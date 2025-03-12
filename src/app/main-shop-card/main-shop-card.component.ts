import { Component, Input, input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SharedDataService } from '../shared-data.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShopCardPopupServiceService } from '../shop-card-popup-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-shop-card',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
 
    ],
   
  templateUrl: './main-shop-card.component.html',
  styleUrl: './main-shop-card.component.scss',

})
export class MainShopCardComponent{
  selectedSize = "Groß";
  selectedMeat = 'Kalb';
  selectedSauce: string[] = [];
  selectedExtras: string[] = [];
  maxAllowedSelections: number = 2;

  constructor(public sd:SharedDataService, public shopPopup: ShopCardPopupServiceService, private sbar: MatSnackBar){}

  @Input() img:string = '';

  @Input() titel:string = '';

  @Input() id:string = '';

  @Input() price:number = 0;

  checkSelection() {
    if (this.selectedSauce.length > this.maxAllowedSelections) {
      // Wenn mehr als 2 ausgewählt sind, die Auswahl auf die ersten 2 beschränken
      this.selectedSauce = this.selectedSauce.slice(0, this.maxAllowedSelections);
    }
  }

  changePrice(){
    if(this.id == "Doener"){
    if(this.selectedSize == "Klein"){
      this.price = 5.50
    }
    if(this.selectedSize == "Groß"){
      this.price = 6.80
    }
    }
  }

  openSnackBar(message: string) {
    const snackBarRef = this.sbar.open(message)
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000); // 2 Sekunden in Millisekunden
  }
  

 disablesamll (){
  if(this.id == 'RollDoener'){
    return true;
  }else{
    return false
  }
 }

 addtoCart(){
  this.shopPopup.orderId.push(this.id);
  this.shopPopup.orderName.push(this.titel);
  this.shopPopup.orderSos.push(this.checkArraySos(this.selectedSauce).join(", "));
  this.shopPopup.orderSos1.push(this.checkArryNull(0));
  this.shopPopup.orderSos2.push(this.checkArryNull(1));
  this.shopPopup.orderExtras.push(this.checkArrayExtras(this.selectedExtras).join(", "));
  this.shopPopup.orderSize.push(this.size());
  this.shopPopup.orderMeat.push(this.selectedMeat);
  this.shopPopup.orderPrice.push(this.price);
  this.shopPopup.orderSpecial.push("/");
  this.openSnackBar("Erfolgreich zum Warenkorb Hinzugefügt!")
 }

 size(){
  if (this.selectedSize === "Groß"){
    return 1
  }else{
    return 0
  }
 }

 chekout(){
  this.addtoCart();
  this.sbar.dismiss();
  this.shopPopup.openSettingsDialog()
 }

 checkArrayExtras(arr:string[]) {
  if (arr.length === 0) {
      return ["Keine Extras"];
  } else {
      return arr;
  }
}

checkArryNull(index: number){
 
  if (this.selectedSauce[index] == null){
    return "ohne Souce"
  }else{
    return this.selectedSauce[index]
  }
  
}

checkArraySos(arr:string[]) {
  if (arr.length === 0) {
      return ["ohne Souce"];
  } else {
      return arr;
  }


}
    
}
