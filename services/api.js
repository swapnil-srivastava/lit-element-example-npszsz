import {urls} from '../config/config';

export function test() {
  return fetch(urls.testUrl);
}