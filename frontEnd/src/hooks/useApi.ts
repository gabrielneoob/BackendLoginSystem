import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/validate', { token });
    return response.data
  },
  signin: async (email: string, password: string) => {
    const response = await api.post('/users', {
      email,
      password
    },
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return response.data; 
  },
  logout: async () => {
    const response = await api.post('/logout');
    response.data;
  }
})