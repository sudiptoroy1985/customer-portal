import { CustomerSelected } from './../../store/customer.action';
import { CustomersState, customersReducer } from './../../store/customer.reducer';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';
import { StoreModule, Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { hot, cold } from 'jasmine-marbles';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;
  let store: Store<CustomersState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ],
      imports: [
          StoreModule.forRoot({
            customers: customersReducer
          })
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load customers on init', () => {
    const customers = [
      { id: 1, name: 'Learn French', age: 12 },
      { id: 2, name: 'Try Poutine', age: 1 }];
    spyOn(store, 'pipe').and.returnValue(
      hot('--a', {a : customers})
    );
    const expected = cold('--a', {a : customers});
    fixture.detectChanges();
    expect(component.customers$).toBeObservable(expected);
  });

  it('should dispatch selected customer to store', () => {
    component.selectCustomer(1);
    expect(store.dispatch).toHaveBeenCalledWith(new CustomerSelected(1));
  });
});
