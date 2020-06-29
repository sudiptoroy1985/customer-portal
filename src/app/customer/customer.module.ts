import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerComponent } from './components/customers-list/customer/customer.component';
import { CustomerAddressDetailComponent } from './components/customer-address-detail/customer-address-detail.component';
import { customersReducer } from './store/customer.reducer';
import { CustomerEffects } from './store/customer.effects';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [CustomersListComponent, CustomerComponent, CustomerAddressDetailComponent, CustomerDashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  exports: [
    CustomersListComponent
  ]
})
export class CustomerModule { }
