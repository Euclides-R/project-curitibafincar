// import the model
import Companie from "../models/Companie";
import Contract from "../models/Contract";
import User from "../models/User";

class ContractCotroller {
  async store(req, res) {
    const contract = await Contract.create(req.body);
    console.log(res.json(contract));
  }

  async index(req, res) {
    const contracts = await Contract.findAll({
      attributes: [
        "id",
        "type_contract",
        "amount_times",
        "entry_date",
        "installments_date",
      ],
      include: [
        {
          model: Companie,
          as: 'companies'
        },
      ],
    });
    return res.json(contracts);
  }

  async update(req, res) {
    let contract = await Contract.findByPk(req.params.id);
    contract = await contract.update(req.body);
    return res.json(contract);
  }

  async delete(req, res) {
    let contract = await Contract.findByPk(req.params.id);
    contract = await contract.destroy(req.body);
    return res.json(contract);
  }

  async show(req, res) {
    let contract = await Contract.findByPk(req.params.id,
      {
        attributes: [
          "id",
          "type_contract",
          "amount_times",
          "entry_date",
          "installments_date",
        ],
        include: [
          {
            model: Companie,
            as: 'companies'
          },
        ],
      });
      return res.json(contracts);
  }
}

export default new ContractCotroller();
