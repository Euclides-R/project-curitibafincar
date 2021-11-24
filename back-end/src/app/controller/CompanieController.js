// import the model
import Companie from "../models/Companie";

class CompanieController {
  async store(req, res) {
    const companie = await Companie.create(req.body);
    return res.json(companie)
  }

  async index(req, res) {
    const companies = await Companie.findAll();
    return res.json(companies);
  }

  async update(req, res) {
    let companie = await Companie.findByPk(req.params.id);
    companie = await companie.update(req.body);
    return res.json(companie)
  }

  async delete(req, res) {
    let companie = await Companie.findByPk(req.params.id);
    companie = await companie.destroy(req.body);
    return res.json(companie)
  }

  async show(req, res) {
    let companie = await Companie.findByPk(req.params.id);
    return res.json(companie)
  }
}

export default new CompanieController();
