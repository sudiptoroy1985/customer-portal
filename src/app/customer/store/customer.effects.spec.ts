import { CustomerService } from './../services/customer.service';
import { CustomerEffects } from './customer.effects';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';


fdescribe('CustomerEffects', () => {
  let actions: Observable<any>;
  let effects: CustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerEffects,
         provideMockActions(() => actions),
				 {
          provide: CustomerService,
          useValue: {
            getAll: () => {},
          }
        },
      ],
    });

    effects = TestBed.get(CustomerEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });
});
