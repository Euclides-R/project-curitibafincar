const axios = require('axios');

const HOST_URL = 'http://localhost:3333';

const getContracts = async () => {
    return await axios.get(`${HOST_URL}/contracts`);
}

const getContractById = async (id) => {
    return await axios.get(`${HOST_URL}/contract/${id}`);
}

const addNewContract = async (data) => {
    const { user_id, company_id, type_contract, value, amount_times } = data
    return await axios.post(`${HOST_URL}/newcontract`, {
        user_id, company_id, type_contract, value, amount_times
    });
}

const putContractById = async (id) => {
    return await axios.pus(`${HOST_URL}/contract/${id}`);
}

const deleteContractById = async (id) => {
    return await axios.delete(`${HOST_URL}/contract/${id}`);
}

export default function ContractService() {
    return {addNewContract}
}
