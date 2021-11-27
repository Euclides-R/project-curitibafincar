const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const getCompanies = async () => {
    return await axios.get(`${HOST_URL}/companies`);
}

const getCompanyById = async (id) => {
    return await axios.get(`${HOST_URL}/companies/${id}`);
}

const postCompanyById = async () => {
    return await axios.post(`${HOST_URL}/companies`);
}

const putCompanyById = async (id) => {
    return await axios.pus(`${HOST_URL}/companies${id}`);
}

const deleteCompanyById = async (id) => {
    return await axios.delete(`${HOST_URL}/companies ${id}`);
}
