import axios from 'axios';
import {urls} from '../config/config';

export function test(id = 1) {
  const updatedTestUrl = `${urls.testUrl}/${id}`;
  return axios.get(updatedTestUrl)
}

// declare a request interceptor
axios.interceptors.request.use(config => {
  // perform a task before the request is sent
  console.log('Request was sent');

  return config;
}, error => {
  // handle the error
  console.log('Request failed');
  return Promise.reject(error);
});
