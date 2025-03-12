import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ShopCardPopupServiceService } from '../shop-card-popup-service.service';
import {MatButtonModule} from '@angular/material/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-shop-card-popup',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, ScrollPanelModule],
  templateUrl: './shop-card-popup.component.html',
  styleUrl: './shop-card-popup.component.scss'
})
export class ShopCardPopupComponent {

  constructor(private dialogRef: MatDialogRef<ShopCardPopupComponent>, public shopcard: ShopCardPopupServiceService) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  

}
