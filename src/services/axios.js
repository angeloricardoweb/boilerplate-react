import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-temp.vercel.app/api/bredi-team',
});
