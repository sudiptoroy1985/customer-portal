import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressDetailComponent } from './customer-address-detail.component';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from '../../store/customer.reducer';

describe('CustomerAddressDetailComponent', () => {
  let component: CustomerAddressDetailComponent;
  let fixture: ComponentFixture<CustomerAddressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddressDetailComponent ],
      imports:[
        StoreModule.forRoot({
          "customers": customersReducer
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
