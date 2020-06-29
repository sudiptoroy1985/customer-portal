import { Component, OnInit } from '@angular/core';
import { CustomersState } from './customer/store/customer.reducer';
import { Store } from '@ngrx/store';
import { CustomersRequested } from './customer/store/customer.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'customer-portal';

  constructor() {}

  ngOnInit(): void {}
}
