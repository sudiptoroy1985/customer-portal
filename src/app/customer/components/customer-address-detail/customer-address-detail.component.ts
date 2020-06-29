import { selectCustomerAddress } from './../../store/customer.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CustomersState } from '../../store/customer.reducer';
import { CustomerAddress } from '../../models/customer-address';

@Component({
  selector: 'app-customer-address-detail',
  templateUrl: './customer-address-detail.component.html',
  styleUrls: ['./customer-address-detail.component.scss']
})
export class CustomerAddressDetailComponent implements OnInit {

  customerAddresses$: Observable<CustomerAddress[]>;

  constructor(private store: Store<CustomersState>) { }

  ngOnInit(): void {
     this.customerAddresses$ = this.store.pipe(select(selectCustomerAddress));

  }

}
