import { CustomerService } from '../services/customer.service';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CustomersRequested, CustomerActionTypes, CustomersLoaded } from './customer.action';
import {catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom} from "rxjs/operators";

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions,
              private customerService: CustomerService,
              private store: Store<any>) {}

  @Effect()
  loadCustomers$ = this.actions$
    .pipe(
      ofType<CustomersRequested>(CustomerActionTypes.CustomersRequested),
      mergeMap(action => this.customerService.getAll()),
      map(customers => new CustomersLoaded(customers))
  );


}
