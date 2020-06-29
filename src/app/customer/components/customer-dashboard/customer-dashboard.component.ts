import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CustomersState } from '../../store/customer.reducer';
import { CustomersRequested } from '../../store/customer.action';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private store: Store<CustomersState>) { }

  ngOnInit(): void{
    this.store.dispatch(new CustomersRequested());
  }

}
