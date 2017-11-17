import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  orderId: number;
  rated: boolean = false;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.params['id'];
  }

  setRated(value: number) {
    this.orderService.updateRating(this.orderId, value)
      .subscribe((res) => {
        console.log(`SUBSCRIBE: ${res}`);
        this.rated = true;
      });
  }

}
