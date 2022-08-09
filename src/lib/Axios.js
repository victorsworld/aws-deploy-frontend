import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_AXIOS === 'development' ? 'http://localhost:3001/api' : '/api',
    timeout: 50000
})

export default Axios;


// for above Axios.js you need 
// either .env or package.json below
//
// .env
// REACT_APP_AXIOS = 'development'  <-- change to 'production' on the instance
// PORT=3000   <--- if you want React to run on a different port
//          -or-
// package.json (currently in use)
// "start": "REACT_APP_AXIOS='production' react-scripts start",
// "dev": "REACT_APP_AXIOS='development' react-scripts start"
//
// ------ OR ---------
// 
// baseURL: process.env.REACT_APP_AXIOS 
//
// package.json
// "start": "REACT_APP_AXIOS=/api PORT=3000 react-scripts start",
// "dev": "REACT_APP_AXIOS=http://localhost:3001/api PORT=3000 react-scripts start"