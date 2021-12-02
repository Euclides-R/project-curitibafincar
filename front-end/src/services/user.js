const axios = require("axios");

const getUser = async (data) => {
  return await axios.post(`${process.env.API_HOST}/userlogin/`, data);
};

const getUserById = async (id) => {
  return await axios.get(`${process.env.API_HOST}/user/${id}`);
};

const registerUser = async (data) => {
  return await axios.post(`${process.env.API_HOST}/registeruser`, data);
};

const resetPasswordUser = async (data) => {
  return await axios.put(`${process.env.API_HOST}/resetpassworduser`, data);
};

const deleteUserById = async (id) => {
  return await axios.delete(`${process.env.API_HOST}/user ${id}`);
};

export default {
  getUser,
  getUserById,
  registerUser,
  resetPasswordUser,
  deleteUserById
};
