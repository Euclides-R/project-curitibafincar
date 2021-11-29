// import the model
import User from "../models/User";

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user)
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async login(req, res) {
    console.log('funcionou');
    const user = await User.findOne({ where: {
      email: req.body.email,
      password: req.body.password
    }});
    if (!user) {
      return res.status(404).json({
        error: "Não encontrado"
      })
    }
    return res.json(user)
  }

  async update(req, res) {
    let user = await User.findByPk(req.params.id);
    user = await user.update(req.body);
    return res.json(user)
  }

  async delete(req, res) {
    let user = await User.findByPk(req.params.id);
    user = await user.destroy(req.body);
    return res.json(user)
  }

  async show(req, res) {
    let user = await User.findByPk(req.params.id);
    return res.json(user)
  }
}

export default new UserController();
