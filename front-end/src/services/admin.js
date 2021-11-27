const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const getAdmins = async () => {
    return await axios.get(`${HOST_URL}/admins`);
}

const getAdminById = async (id) => {
    return await axios.get(`${HOST_URL}/admin/${id}`);
}

const postAdminById = async () => {
    return await axios.post(`${HOST_URL}/admin`);
}

const putAdminById = async (id) => {
    return await axios.pus(`${HOST_URL}/admin/${id}`);
}

const deleteAdminById = async (id) => {
    return await axios.delete(`${HOST_URL}/admin/${id}`);
}
