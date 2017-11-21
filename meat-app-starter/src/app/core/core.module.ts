import { NgModule } from '@angular/core';

import { OrderService } from '../order/order.service';
import { ShoppingCartService } from '../restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';

@NgModule({
  providers: [
    ShoppingCartService,
    OrderService,
    RestaurantsService
  ]
})
export class  CoreModule { }