// import the model
import Company from "../models/Company";

class CompanyController {
  async store(req, res) {
    const companie = await Company.create(req.body);
    return res.json(companie);
  }

  async index(req, res) {
    const companies = await Company.findAll();
    return res.json(companies);
  }

  async update(req, res) {
    let companie = await Company.findByPk(req.params.id);
    companie = await companie.update(req.body);
    return res.json(companie)
  }

  async delete(req, res) {
    let companie = await Company.findByPk(req.params.id);
    companie = await companie.destroy(req.body);
    return res.json(companie)
  }

  async show(req, res) {
    let companie = await Company.findByPk(req.params.id);
    return res.json(companie)
  }
}

export default new CompanyController();
