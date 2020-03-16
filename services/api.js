import {urls} from '../../config/config';

export function getCustomerInformation(customerid, branchid) {
  return fetch(`${urls.testUrl}`);
}