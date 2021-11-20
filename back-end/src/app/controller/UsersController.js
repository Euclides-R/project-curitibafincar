import Users from '../models/Users';
import Contratc from '../models/Contratc';

class UsersControllers {
    async store (req, res) {
        const user = await Users.create(req.body);
        return res.json(user)
    }
    async index (req, res) {
        const user = await Users.findAll({
            attributes: [
                'id',
                'type_user',
                'name',
                'cpf',
                'email',
                'password'
            ],
            include: [
                { 
                    model: Contratc,
                    as: 'contratc'
                }
            ]
        });
        return res.json(user)
    }
    async update (req, res) {
        let user = await Users.findByPk(req.params.id);
        user = await user.update(req.body);
        return res.json(user);
    }
    async delete (req, res) {
        let user = await Users.findByPk(req.params.id);
        user = await user.destroy(req.body);
        return res.json(user);
    }
    async show (req, res) {
        const user = await Users.findAll(req.params.id, {
            attributes: [
                'id',
                'type_user',
                'name',
                'cpf',
                'email',
                'password'
            ],
            include: [
                { 
                    model: Contratc,
                    as: 'contratc'
                }
            ]
        });
        console.log(user);
        return res.json(user)

    }
}

export default new UsersControllers();
