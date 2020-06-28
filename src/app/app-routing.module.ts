import {
    CustomersListComponent
} from './customer/components/customers-list/customers-list.component';
import {
    CustomerAddressDetailComponent
} from './customer/components/customer-address-detail/customer-address-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'detail', component: CustomerAddressDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
