const axios = require('axios');

const LOCAL_HOST = "http://localhost:3333";

const getContracts = async () => {
    return await axios.get(`${LOCAL_HOST}/contracts`);
}

const getContractById = async (id) => {
    return await axios.get(`${process.env.API_HOST}/contract/${id}`);
}

const addNewContract = async (data) => {
    const { user_id, company_id, type_contract, value, amount_times } = data
    return await axios.post(`${process.env.API_HOST}/newcontract`, {
        user_id, company_id, type_contract, value, amount_times
    });
}

const putContractById = async (id) => {
    return await axios.put(`${process.env.API_HOST}/contract/${id}`);
}

const deleteContractById = async (id) => {
    return await axios.delete(`${process.env.API_HOST}/contract/${id}`);
}

export default {
    getContracts,
    addNewContract
}
