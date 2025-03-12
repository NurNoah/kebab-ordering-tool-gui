import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private newOrderApiUrl = 'http://localhost:8080/createOrder'
  private getOrderApi = 'http://localhost:8080/orders'


  constructor(private http: HttpClient) { }

  saveNewOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.newOrderApiUrl, orderData);
  }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.getOrderApi);
  }
}
