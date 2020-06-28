import { Customer } from '../models/customer';
import {Action} from '@ngrx/store';


export enum CustomerActionTypes {
  CustomersRequested = '[Customers Component] Customers Requested',
  CustomersLoaded = '[Customers API] Customers Loaded',
}

export class CustomersRequested implements Action {

  readonly type = CustomerActionTypes.CustomersRequested;

  constructor() {}

}

export class CustomersLoaded implements Action {

  readonly type = CustomerActionTypes.CustomersLoaded;

  constructor(public payload: Customer[]) {}

}

export type CustomerActions =
CustomersRequested
  | CustomersLoaded;
