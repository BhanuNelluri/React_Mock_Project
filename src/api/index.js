import axios from 'axios';

const API = axios.create({ baseURL: "https://reqres.in/api/users" });

export const fetchUsers = () => API.get('/');