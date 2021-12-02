const axios = require('axios');

const getAdmins = async () => {
    return await axios.get(`${process.env.API_HOST}/admins`);
}

const getAdminById = async (id) => {
    return await axios.get(`${process.env.API_HOST}/admin/${id}`);
}

const postAdminById = async () => {
    return await axios.post(`${process.env.API_HOST}/admin`);
}

const putAdminById = async (id) => {
    return await axios.pus(`${process.env.API_HOST}/admin/${id}`);
}

const deleteAdminById = async (id) => {
    return await axios.delete(`${process.env.API_HOST}/admin/${id}`);
}
