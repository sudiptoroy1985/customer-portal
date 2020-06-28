import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CustomersState} from './customer.reducer';
import * as fromCustomers from './customer.reducer';



export const customersState = createFeatureSelector<CustomersState>('customers');

export const selectAllCustomers = createSelector(
  customersState,
  fromCustomers.selectAll
);
