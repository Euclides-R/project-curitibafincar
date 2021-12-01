// import the model
import Company from "../models/Company";

class CompanyController {
  async store(req, res) {
    try {
      const company = await Company.create(req.body);
      return res.json(company);
    } catch (error) {
      console.log(error);
      return res.status(402).json({error: "erro de inserção"});
    }
  }

  async index(req, res) {
    const companies = await Company.findAll();
    return res.json(companies);
  }

  async update(req, res) {
    let company = await Company.findByPk(req.params.id);
    company = await company.update(req.body);
    return res.json(company)
  }

  async delete(req, res) {
    let company = await Company.findByPk(req.params.id);
    company = await company.destroy(req.body);
    return res.json(company)
  }

  async show(req, res) {
    let company = await Company.findByPk(req.params.id);
    return res.json(company)
  }
}

export default new CompanyController();
