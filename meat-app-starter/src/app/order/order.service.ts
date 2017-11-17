import { CartItem } from '../restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService, 
    private http: Http) {
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
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(
      `${MEAT_API}/orders`, 
      JSON.stringify(order),
      new RequestOptions({headers}))
      .map(response => response.json())
      .map(order => order.id);

  }

  clear() {
    this.cartService.clear();
  }

  updateRating(orderId: number, rate: number): Observable<string> {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.patch(
      `${MEAT_API}/orders/${orderId}`, 
      JSON.stringify({rating: rate}),
      new RequestOptions({headers}))
      .map(response => response.json());
  }

}