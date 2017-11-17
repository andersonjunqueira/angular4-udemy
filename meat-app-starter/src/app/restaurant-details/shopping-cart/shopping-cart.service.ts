import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from '../../app.api';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private http: Http) {
  }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    let found = this.items.find(mItem => item.id === mItem.menuItem.id);
    if(found) {
      this.increaseQty(found);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1
    if(item.quantity === 0) {
      this.removeItem(item);
    }
  }

}