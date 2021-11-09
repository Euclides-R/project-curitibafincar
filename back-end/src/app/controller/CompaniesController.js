import Companies from '../models/Companies';
import Contratc from '../models/Contratc';

class CompaniesController {
    async store (req, res) {
        const companies = await Companies.create(res.body);
        return res.json(companies)
    }
    async index (req, res) {
        const companies = await Companies.findAll({
            attributes: [
                'id',
                'cnpj',
                'name',
                'interest_rate'
            ],
            include: [
                { 
                    model: Contratc,
                    as: 'companies'
                }
            ]
        });
        return res.json(companies)
    }
    async update (req, res) {
        let companies = await Companies.findByPk(req.params.id);
        companies = await companies.update(req.body);
        return res.json(companies);
    }
    async delete (req, res) {
        let companies = await Companies.findByPk(req.params.id);
        companies = await companies.destroy(req.body);
        return res.json(companies);
    }
    async show (req, res) {
        const companies = await Companies.findAll({
            attributes: [
                'id',
                'cnpj',
                'name',
                'interest_rate'
            ],
            include: [
                { 
                    model: Contratc,
                    as: 'companies'
                }
            ]
        });
        return res.json(companies)
    }
}

export default new CompaniesController();
