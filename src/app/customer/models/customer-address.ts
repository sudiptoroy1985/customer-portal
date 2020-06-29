import { zip } from 'rxjs';

export class CustomerAddress {
  public id: number ;
  public building: any ;
  public street: any;
  public zipCode: number;
  public state: any;
  public customerId: number;

  constructor(id: number, building: any, street: any, zipCode: number, state: any, customerId: number){
    this.id = id;
    this.building = building;
    this.street = street;
    this.zipCode = zipCode;
    this.state = state;
    this.customerId = customerId;
  }
}
