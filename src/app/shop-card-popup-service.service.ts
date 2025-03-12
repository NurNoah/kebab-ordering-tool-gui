import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopCardPopupComponent } from './shop-card-popup/shop-card-popup.component';
import { DarkmodeService } from './darkmode.service';
import { ApiService } from './api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ShopCardPopupServiceService {

  cusFirstName: string = '';

  cusSirName: string = '';

  orderId: string[] = [];

  orderName: string[] = [];

  orderSos: string[] = [];

  orderSos1: string [] = [];

  orderSos2: string [] = [];

  orderExtras: string[] = [];

  orderSpecial: String[] = [];

  orderSize: number[] = [];

  orderMeat: string[] = [];

  orderPrice: number[] = [];

  //order = [
  //  {id: 'Doener', name:'Döner', sos:'Spycy mayo, knoblaubch', extras:'ohne Tomate, scharf, ohne Ziebel, ohne kraut', price:13},
  //  {id: 'RollDoener', name:'RollDöner', sos:'knoblaubch', extras:'scharf', price:5.5},
  //  {id: 'RollDoener', name:'RollDöner', sos:'kräuter', extras:'tomaten', price:7},
  //]
  isAuth = false;

  constructor(private dialog: MatDialog, public ds: DarkmodeService, public api: ApiService, public sbar: MatSnackBar) { }

  openSettingsDialog(): void {
    if (this.isAuth) {
      const dialogRef = this.dialog.open(ShopCardPopupComponent);

      // Du kannst hier weitere Aktionen nach dem Schließen des Dialogs hinzufügen
      dialogRef.afterClosed().subscribe((result) => {
        console.log('Dialog geschlossen', result);
      });

      if (this.ds.isDarkmode == true) {
        document.getElementById('shopcardPopUpBody')?.classList.toggle('dark-mode');
      }
    }
  }

  openSnackBar(message: string) {
    const snackBarRef = this.sbar.open(message)
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000); // 2 Sekunden in Millisekunden
  }

  sumOfArray(numbers: number[]): number {
    let sum: number = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;

  }

  removeElement(index: number) {
    this.orderId.splice(index, 1);
    this.orderName.splice(index, 1);
    this.orderSos.splice(index, 1);
    this.orderSos1.splice(index, 1);
    this.orderSos2.splice(index, 1);
    this.orderExtras.splice(index, 1);
    this.orderSize.splice(index, 1);
    this.orderMeat.splice(index, 1);
    this.orderPrice.splice(index, 1);
    this.orderSpecial.splice(index, 1);
  }

  deleteAll(){
    this.orderId.splice(0, this.orderId.length);
    this.orderName.splice(0, this.orderName.length);
    this.orderSos.splice(0, this.orderSos.length);
    this.orderSos1.splice(0, this.orderSos1.length);
    this.orderSos2.splice(0, this.orderSos2.length);
    this.orderExtras.splice(0, this.orderExtras.length);
    this.orderSize.splice(0, this.orderSize.length);
    this.orderMeat.splice(0, this.orderMeat.length);
    this.orderPrice.splice(0, this.orderPrice.length);
    this.orderSpecial.splice(0, this.orderSpecial.length);
  }

  pushtoSQL() {
    for (let i = 0; i < this.orderId.length; i++) {
      const orderData = {
        cusForename: this.cusFirstName,
        cusSurename: this.cusSirName,
        product: this.orderName[i],
        price: this.orderPrice[i].toString(),
        size: this.orderSize[i],
        sauce1: this.orderSos1[i],
        sauce2: this.orderSos2[i],
        meat: this.orderMeat[i],
        specialWishes: this.orderExtras[i].split(', '),
        specialInstruction: this.orderSpecial[i],
        orderDate: this.getDate()
      };
      console.log(orderData)
       this.api.saveNewOrder(orderData).subscribe(
         response => {
          this.deleteAll()
           console.log('Bestellung erfolgreich erstellt:', response);
           this.openSnackBar("Bestellung erfolgreich Aufgegebn");
         },
         error => {
           console.error('Fehler beim Erstellen der Bestellung:', error);
         }
       );
    }
  }

  getDate(): string {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
  
    return formattedDate;
  }  

  getDates(): string {
    const currentTimestampInMillis = Date.now();
    const currentDate = new Date(currentTimestampInMillis);
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  
    return formattedDate;
  }
  

  smallbig(index: number){
    if (this.orderSize[index] == 0) {
      return "Klein"
    }else{
      return "Groß"
    }
  }

  extraSpec(index: number){
    if(this.orderExtras[index] == "/"){
      return this.orderSpecial[index]
    }else{
      return this.orderExtras[index]
    }
  }
}
