import { CustomerService } from '../services/customer.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CustomersRequested, CustomerActionTypes, CustomersLoaded, CustomerSelected, CustomerAddressesLoaded } from './customer.action';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom, tap} from "rxjs/operators";
import { pipe } from 'rxjs';

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions,
              private customerService: CustomerService) {}

  @Effect()
  loadCustomers$ = this.actions$
    .pipe(
      ofType<CustomersRequested>(CustomerActionTypes.CustomersRequested),
      mergeMap(action => this.customerService.getAll()),
      map(customers => new CustomersLoaded(customers))
  );

  @Effect()
  loadSelectedCustomerAdress$ = this.actions$
    .pipe(
      ofType<CustomerSelected>(CustomerActionTypes.CustomerSelected),
      mergeMap(action => this.customerService.getAddressesById(action.payload)),
      map(addresses => new CustomerAddressesLoaded(addresses))
  );


}
