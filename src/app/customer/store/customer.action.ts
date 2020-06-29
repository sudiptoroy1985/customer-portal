import { CustomerAddress } from './../models/customer-address';
import { Customer } from '../models/customer';
import {Action} from '@ngrx/store';


export enum CustomerActionTypes {
  CustomersRequested = '[Customers Component] Customers Requested',
  CustomersLoaded = '[Customers API] Customers Loaded',
  CustomerSelected = '[Customer Card] Customer Selected',
  CustomerAddressesLoaded = '[Customer Address API] Customer Address Loaded',
}

export class CustomersRequested implements Action {
  readonly type = CustomerActionTypes.CustomersRequested;
  constructor() {}
}

export class CustomersLoaded implements Action {
  readonly type = CustomerActionTypes.CustomersLoaded;
  constructor(public payload: Customer[]) {}
}

export class CustomerSelected implements Action {
  readonly type = CustomerActionTypes.CustomerSelected;
  constructor(public payload: number) {}
}

export class CustomerAddressesLoaded implements Action {
  readonly type = CustomerActionTypes.CustomerAddressesLoaded;
  constructor(public payload: CustomerAddress[]) {}
}



export type CustomerActions =
CustomersRequested
  | CustomersLoaded
  | CustomerSelected
  | CustomerAddressesLoaded;
