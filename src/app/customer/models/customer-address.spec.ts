import { CustomerAddress } from './customer-address';

describe('CustomerAddress', () => {
  it('should create an instance', () => {
    expect(new CustomerAddress(1,'','',12,'',2)).toBeTruthy();
  });
});
