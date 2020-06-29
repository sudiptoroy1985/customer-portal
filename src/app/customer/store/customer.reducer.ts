import { CustomerAddress } from './../models/customer-address';
import {Customer} from './../models/customer';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { CustomerActionTypes, CustomerActions } from './customer.action';


export interface CustomersState extends EntityState<Customer> {
  allCustomersLoaded: boolean;
  addresses: CustomerAddress[];
}


export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();


export const initialCustomersState: CustomersState = adapter.getInitialState({
  allCustomersLoaded: false,
  addresses: []
});

export function customersReducer(state = initialCustomersState , action: CustomerActions): CustomersState {
  switch(action.type) {
    case CustomerActionTypes.CustomersLoaded:
      return adapter.addAll(action.payload, state);
    case CustomerActionTypes.CustomerAddressesLoaded:
      const customerAddresses: CustomerAddress[] = action.payload;
      return {...state, addresses: customerAddresses};
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
