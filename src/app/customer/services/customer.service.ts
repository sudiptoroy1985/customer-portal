import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private client: HttpClient) {}

  getAll(): Observable<Customer[]> {
    const customers = this.client.get('api/customers');
    console.log(customers);
    return customers as Observable<Customer[]>;
  }
}
