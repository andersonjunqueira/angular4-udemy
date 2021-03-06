import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-details/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'money'},
    {label: 'Cartão de Débito', value:'deb'},
    {label: 'Cartão Refeição', value:'ref'}
  ]

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(5)
      ]),
      email: this.formBuilder.control('', [
        Validators.required, 
        Validators.pattern(this.emailPattern)
      ]),
      emailConfirmation: this.formBuilder.control('', [
        Validators.required, 
        Validators.pattern(this.emailPattern)
      ]),
      address: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(5)
      ]),
      number: this.formBuilder.control('', [
        Validators.required, 
        Validators.pattern(this.numberPattern)
      ]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [
        Validators.required
      ])
    }, { validator: OrderComponent.equalsTo });
  }

  static equalsTo(group: AbstractControl): {[key: string]:boolean} {
    const e1 = group.get('email');
    const e2 = group.get('emailConfirmation');

    if(!e1 || !e2) {
      return undefined;
    }

    if(e1.value !== e2.value) {
      return {emailsNotMatch: true};
    }

    return undefined;
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
