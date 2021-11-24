// import the model
import Contract from "../models/Contract";

class ContractCotroller {
  async store(req, res) {
    const contract = await Contract.create(req.body);
    console.log(res.json(contract))
  }

  async index(req, res) {
    const contracts = await Contract.findAll();
    return res.json(contracts);
  }

  async update(req, res) {
    let contract = await Contract.findByPk(req.params.id);
    contract = await contract.update(req.body);
    return res.json(contract)
  }

  async delete(req, res) {
    let contract = await Contract.findByPk(req.params.id);
    contract = await contract.destroy(req.body);
    return res.json(contract)
  }

  async show(req, res) {
    let contract = await Contract.findByPk(req.params.id);
    return res.json(contract)
  }
}

export default new ContractCotroller();
