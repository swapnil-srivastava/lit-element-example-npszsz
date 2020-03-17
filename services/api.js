import axios from 'axios';
import {urls} from '../config/config';

const source = axios.CancelToken.source();

export function test(id = 2) {
  const updatedTestUrl = `${urls.testUrl}/${id}`;
  return axios.get(updatedTestUrl,  {
    cancelToken: source.token
  })
}

export function cancelRequest() {
  source.cancel('Request canceled.');
}