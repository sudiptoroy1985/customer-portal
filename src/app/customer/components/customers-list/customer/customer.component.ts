import { Customer } from '../../../models/customer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input()
  customer: Customer;

  @Output()
  selectedCustomerId: EventEmitter<number> = new EventEmitter();

  @Input()
  isSelected: boolean ;

  constructor() { }

  ngOnInit(): void {
    this.isSelected = false;
  }

  selectCustomer(id: number): void {
    this.selectedCustomerId.emit(id);
  }

}
