const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const getContracts = async () => {
  return await axios.get(`${HOST_URL}/contracts`);
}

const getContractById = async (id) => {
  return await axios.get(`${HOST_URL}/contract/${id}`);
}

const registerContract = async (data) => {
  return await axios.post(`${HOST_URL}/newcontract`, data);
}

const putContract = async (id, data) => {
  return await axios.put(`${HOST_URL}/contract/${id}`, data);
}

const deleteContractById = async (id) => {
  return await axios.delete(`${HOST_URL}/contract/${id}`);
}

export default {
  getContracts,
  getContractById,
  registerContract,
  putContract,
  deleteContractById
}