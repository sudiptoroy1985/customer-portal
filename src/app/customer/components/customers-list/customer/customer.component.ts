import { Customer } from '../../../models/customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input()
  customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
