import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})

export const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/',
    timeout: 10000
})