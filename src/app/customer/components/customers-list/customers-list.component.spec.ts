import { CustomersState } from './../../store/customer.reducer';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';
import { StoreModule, Store } from '@ngrx/store';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;
  let store: Store<CustomersState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ],
      imports: [
        {
          provide: Store,
          useValue: {
            pipe: () => {},
            dispatch: () => {}
          }
        }
      ]
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
