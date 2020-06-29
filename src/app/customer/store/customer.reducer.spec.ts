import { Customer } from './../models/customer';
import * as fromCustomers from './customer.reducer';
import * as fromActions from './customer.action';
import { CustomerAddress } from '../models/customer-address';

describe('CustomerReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialCustomersState } = fromCustomers;
      const action: fromActions.CustomerActions = {type: undefined, payload: undefined};
      const state = fromCustomers.customersReducer(undefined, action);

      expect(state).toBe(initialCustomersState);
    });


    it('should load all customers', () => {
      const customers: Customer[] = [];
      customers.push(new Customer(1, 'Sudipto', 12));
      const { initialCustomersState } = fromCustomers;
      const action: fromActions.CustomerActions = new fromActions.CustomersLoaded(customers);
      const state = fromCustomers.customersReducer(initialCustomersState, action);

      expect(state.ids).toEqual([1]);
      expect(state.entities).toEqual({1: new Customer(1, 'Sudipto', 12)});
      expect(state.addresses).toEqual([]);
    });

    it('should load selected customer address', () => {
      const addresses: CustomerAddress[] = [];
      addresses.push(new CustomerAddress(1, 'building1', 'Street1', 560102, 'KA', 1));
      const { initialCustomersState } = fromCustomers;
      const action: fromActions.CustomerActions = new fromActions.CustomerAddressesLoaded(addresses);
      const state = fromCustomers.customersReducer(initialCustomersState, action);

      expect(state.addresses).toEqual(addresses);
    });
  });

});
