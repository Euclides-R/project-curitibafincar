const axios = require('axios');

const getCompanies = async () => {
  return await axios.get(`${process.env.API_HOST}/companies`);
};

const getCompanyById = async (id) => {
  return await axios.get(`${process.env.API_HOST}/company/${id}`);
};

const registerCompany = async (data) => {
  return await axios.post(`${process.env.API_HOST}/registercompany`, data);
};

const putCompanyById = async (id) => {
  return await axios.pus(`${process.env.API_HOST}/company/${id}`);
};

const deleteCompanyById = async (id) => {
  return await axios.delete(`${process.env.API_HOST}/company/${id}`);
};

export {
  getCompanies,
  getCompanyById,
  registerCompany,
  putCompanyById,
  deleteCompanyById
};