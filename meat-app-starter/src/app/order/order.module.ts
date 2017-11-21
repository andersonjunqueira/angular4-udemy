import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class  OrderModule { }