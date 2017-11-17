import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
      return this.deliveryValue() + this.itemsValue;
  }

  deliveryValue(): number {
    if(this.itemsValue > 0) {
      return this.delivery;
    } else {
      return 0;
    }
  }
}
