import axios from 'axios';
import {urls} from '../config/config';

export function test(id = 1) {
  const updatedTestUrl = `${urls.testUrl}/${id}`;
  return axios.get(updatedTestUrl)
}