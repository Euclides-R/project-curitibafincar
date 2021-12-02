const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const getCompanies = async () => {
  return await axios.get(`${HOST_URL}/companies`);
}

const getCompanyById = async (id) => {
  return await axios.get(`${HOST_URL}/company/${id}`);
}

const registerCompany = async (data) => {
  const {name, reason_social, cnpj, email, interest_rate, address} = data;
  return await axios.post(`${HOST_URL}/registercompany`, {
    name, reason_social, cnpj, email, interest_rate, address
  });
}

const putCompany = async (id) => {
  return await axios.pus(`${HOST_URL}/company/${id}`);
}

const deleteCompanyById = async (id) => {
  return await axios.delete(`${HOST_URL}/company/${id}`);
}

export default {
  getCompanies,
  getCompanyById,
  registerCompany,
  putCompany,
  deleteCompanyById
}