import { CustomerAddress } from './../models/customer-address';
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
    return this.client.get('api/customers') as Observable<Customer[]>;
  }

  getAddressesById(id: number): Observable<CustomerAddress[]>{
    return this.client.get(`api/customers/${id}/addresses`) as Observable<CustomerAddress[]>;
  }
}
