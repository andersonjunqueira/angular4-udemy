import { CartItem } from '../restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService, 
    private http: HttpClient) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .map(order => order.id);
  }

  clear() {
    this.cartService.clear();
  }

  updateRating(orderId: number, rate: number): Observable<string> {
    return this.http.patch<string>(`${MEAT_API}/orders/${orderId}`, {});
  }

}