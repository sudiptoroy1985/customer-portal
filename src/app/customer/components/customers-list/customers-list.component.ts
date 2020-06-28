import { CustomersRequested } from './../../store/customer.action';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersState } from '../../store/customer.reducer';
import { selectAllCustomers } from '../../store/customer.selector';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomersState>) {}

  ngOnInit(): void {
    this.customers$ = this.store.pipe(select(selectAllCustomers));
  }
}
