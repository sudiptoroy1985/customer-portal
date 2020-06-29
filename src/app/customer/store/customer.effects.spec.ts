import { CustomerAddress } from './../models/customer-address';
import { StoreModule, Store } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './../services/customer.service';
import { CustomerEffects } from './customer.effects';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, ReplaySubject, of } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { customersReducer, CustomersState } from './customer.reducer';
import { Customer } from '../models/customer';
import { CustomersLoaded, CustomersRequested, CustomerAddressesLoaded, CustomerSelected } from './customer.action';


describe('CustomerEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: CustomerEffects;
  let customerService: CustomerService;
  let store: Store<CustomersState>;

  beforeEach(() => {
    actions = new ReplaySubject<any>(1);
    TestBed.configureTestingModule({
      providers: [
         provideMockActions(() => actions),
		  	 CustomerService
      ],
      imports: [
        HttpClientModule,
        EffectsModule.forRoot([CustomerEffects]),
        HttpClientTestingModule,
        StoreModule.forRoot({
          "customers": customersReducer
        })
      ]
    });

    effects = TestBed.get(CustomerEffects);
    store = TestBed.get(Store);
    customerService = TestBed.get(CustomerService);
    spyOn(store, 'dispatch').and.callThrough();

  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  it('should load all customers created', (done: DoneFn) => {
    const customers: Customer[] = [];
    customers.push(new Customer(1, 'Sudipto', 12));
    spyOn(customerService, 'getAll').and.returnValue(
      of(customers)
    );
    effects.loadCustomers$.subscribe(result => {
       expect(result).toEqual(new CustomersLoaded(customers));
       done();
     });
    actions.next(new CustomersRequested());
  });

  it('should load selected customers address', (done: DoneFn) => {
    const addresses: CustomerAddress[] = [];
    addresses.push(new CustomerAddress(1, 'building1', 'Street1', 560102, 'KA', 1));
    spyOn(customerService, 'getAddressesById').and.returnValue(
      of(addresses)
    );
    effects.loadSelectedCustomerAdress$.subscribe(result => {
       expect(result).toEqual(new CustomerAddressesLoaded(addresses));
       done();
     });
    actions.next(new CustomerSelected(1));
  });
});
