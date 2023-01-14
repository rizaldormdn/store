import axios from 'axios'

const Axios = axios.create({
     baseURL: 'http://localhost:9000/',
     timeout: 100000,
     headers: {'content-type': 'application/json'},
     method: 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
}) 

export default Axios