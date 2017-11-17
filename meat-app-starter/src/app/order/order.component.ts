import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-details/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'money'},
    {label: 'Cartão de Débito', value:'deb'},
    {label: 'Cartão Refeição', value:'ref'}
  ]

  constructor(
    private orderService: OrderService,
    private router: Router) {}

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }
  
  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: any) {

    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(
        item.quantity,
        item.menuItem.id
      ));

    this.orderService.checkOrder(order)
      .subscribe( (id: string) => {
        this.orderService.clear();
        this.router.navigate(['order-summary', id]);
      });
  }
}
