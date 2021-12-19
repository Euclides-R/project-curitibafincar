const axios = require("axios");

const HOST_URL = "http://localhost:3333";

const getUser = async (data) => {
  return await axios.post(`${HOST_URL}/userlogin/`, {
    email: data.email,
    password: data.password,
  });
};

const getUserById = async (id) => {
  return await axios.get(`${HOST_URL}/user/${id}`);
};

const registerUser = async (data) => {
  return await axios.post(`${HOST_URL}/registeruser`, data);
};

const resetPasswordUser = async (data) => {
  return await axios.put(`${HOST_URL}/resetpassworduser`, data);
};

const deleteUserById = async (id) => {
  return await axios.delete(`${HOST_URL}/user ${id}`);
};

export default {getUser, registerUser, resetPasswordUser};
