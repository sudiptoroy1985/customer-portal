import {Customer} from './../models/customer';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { CustomerActionTypes, CustomerActions } from './customer.action';


export interface CustomersState extends EntityState<Customer> {
  allCustomersLoaded: boolean;
}


export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();


export const initialCustomersState: CustomersState = adapter.getInitialState({
  allCustomersLoaded: false
});

export function customersReducer(state = initialCustomersState , action: CustomerActions): CustomersState {
  switch(action.type) {
    case CustomerActionTypes.CustomersLoaded:
      return adapter.addAll(action.payload, state);
    default: {
      return state;
    }
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
