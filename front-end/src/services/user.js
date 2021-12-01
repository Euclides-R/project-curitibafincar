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
  const { name, cpf, email, password } = data;
  return await axios.post(`${HOST_URL}/registeruser`, {
    name: name,
    cpf: cpf,
    email: email,
    password: password,
  });
};

const putUserById = async (id) => {
  return await axios.put(`${HOST_URL}/user${id}`);
};

const deleteUserById = async (id) => {
  return await axios.delete(`${HOST_URL}/user ${id}`);
};

export default function UserService() {
  return { getUser, registerUser };
}
