import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers$ = this.customerService.getAll();
  }
}
