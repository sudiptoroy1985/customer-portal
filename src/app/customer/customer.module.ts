import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerComponent } from './components/customers-list/customer/customer.component';
import { CustomerAddressDetailComponent } from './components/customer-address-detail/customer-address-detail.component';

@NgModule({
  declarations: [CustomersListComponent, CustomerComponent, CustomerAddressDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CustomersListComponent
  ]
})
export class CustomerModule { }
