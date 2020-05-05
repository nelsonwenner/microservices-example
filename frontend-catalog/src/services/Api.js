import Axios from 'axios';

const base = Axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-Type": "application/json"
    }
})

const getOrder = (token) => Axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})

const getCheckout = (token) => Axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
  }
})

export default { getOrder, base, getCheckout };
