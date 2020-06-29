import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService],
      schemas: [NO_ERRORS_SCHEMA]
  });
    service = TestBed.get(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all customers', () => {
    expect(service).toBeTruthy();
  });
});
