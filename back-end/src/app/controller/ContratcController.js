// import models
import Contratc from "../models/Contratc";

class ContratcController {
    async store (req, res) {
        const contr = await Contratc.create(req.body);
        return res.json(contr);
    }
    async index (req, res) {
        const contrs = await Contratc.findAll();
        return res.json(contrs);
    }
    async update (req, res) {
        let contr = await Contratc.findByPk(req.params.id);
        contr = await contr.update(req.body);
        return res.json(contr);
    }
    async delete (req, res) {
        let contr = await Contratc.findByPk(req.params.id);
        contr = await contr.destroy(req.body);
        return res.json(contr);
    }
    async show (req, res) {
        let contr = await Contratc.findByPk(req.params.id);
        return res.json(contr);
    }
}

export default new ContratcController();
