import { CustomersState, customersReducer } from './../../store/customer.reducer';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';
import { StoreModule, Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;
  let store: Store<CustomersState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ],
      imports: [
          StoreModule.forRoot({
            "customers": customersReducer
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
