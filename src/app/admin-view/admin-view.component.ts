import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent implements OnInit{

  orders: any[] = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllData().subscribe(data => {
      this.orders = data;
    });
  }

}
