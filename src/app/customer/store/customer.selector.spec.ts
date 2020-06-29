import { CustomersState } from './customer.reducer';
import { TodosState, selectTodos, selectCurrentFilter, selectTodosEntities, getFilteredTodos } from './index';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '../models/customer';
import { selectAllCustomers } from './customer.selector';

describe('customerSelectors', () => {
  let adapter: EntityAdapter<Customer>;
  let initialState: any;
  let customers: Array<Customer> = [
    { id: 1, name: 'Learn French', age: 12 },
    { id: 2, name: 'Try Poutine', age: 1 }
  ];

  beforeAll(() => {
    adapter = createEntityAdapter<Customer>();
    initialState = adapter.getInitialState();
  });

  describe('selectCustomers', () => {
    it('should return empty customers', () => {
      const state: CustomersState = {
        ids: [],
        entities: {},
        allCustomersLoaded: false,
        addresses: []
      };
      expect(selectAllCustomers.projector(state)).toEqual([]);
    });

    it('should return empty customers', () => {
      const state: CustomersState = {
        ids: [1, 2],
        entities: {
          1: { id: 1, name: 'Learn French', age: 12 },
          2: { id: 2, name: 'Try Poutine', age: 1 }
        },
        allCustomersLoaded: false,
        addresses: []
      };
      expect(selectAllCustomers.projector(state)).toEqual(customers);
    });
   });
  });
