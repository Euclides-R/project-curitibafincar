// import the model
import Admin from "../models/Admin";

class AdminController {
  async store(req, res) {
    const adm = await Admin.create(req.body);
    return res.json(adm)
  }

  async index(req, res) {
    const adm = await Admin.findAll();
    return res.json(adm);
  }

  async update(req, res) {
    let adm = await Admin.findByPk(req.params.id);
    adm = await adm.update(req.body);
    return res.json(adm)
  }

  async delete(req, res) {
    let adm = await Admin.findByPk(req.params.id);
    adm = await adm.destroy(req.body);
    return res.json(adm)
  }

  async show(req, res) {
    let adm = await Admin.findByPk(req.params.id);
    return res.json(adm)
  }
}

export default new AdminController();
