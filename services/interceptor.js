import axios from 'axios';

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
