const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const API =  axios.default({
    baseURL: HOST_URL
})

module.exports = API;
