import axios from 'axios';

// declare a request interceptor
axios.interceptors.request.use(config => {
  // perform a task before the request is sent
  console.log('Request was sent', config);


  return config;
}, error => {
  // handle the error
  console.log('Request failed');

  return Promise.reject(error);
});


// declare a response interceptor
axios.interceptors.response.use((response) => {
  // do something with the response data
  console.log('Response was received', response);
  

  return response;
}, error => {
  console.log('Response failed');
  // handle the response error
  return Promise.reject(error);
});