// import the model
import Company from "../models/Company";
import Contract from "../models/Contract";
import User from "../models/User";

let moment = require('moment');
let entry = moment().add(30, "days").utc();
let installments = moment().add(60, "days").utc();

class ContractCotroller {
  async store(req, res) {
    console.log(req.body);
    try {
      const contract = await Contract.create({
        ...req.body,
        entry_date: entry,
        installments_date: installments,
        status: 'pendente'
      });
      res.json(contract);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "error de simulação" });
    }
  }

  async index(req, res) {
    const contracts = await Contract.findAll({
      attributes: [
        "id",
        "type_contract",
        "amount_times",
        "entry_date",
        "value",
        "status",
        "installments_date",
      ],
      include: [
        {
          model: User,
          as: 'user'
        },
        {
          model: Company,
          as: 'company'
        }
      ]
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
    let contract = await Contract.findByPk(req.params.id, {
      attributes: [
        "id",
        "type_contract",
        "amount_times",
        "entry_date",
        "value",
        "status",
        "installments_date",
      ],
      include: [
        {
          model: Company,
          as: "companies",
        },
      ],
    });
    return res.json(contracts);
  }
}

export default new ContractCotroller();
