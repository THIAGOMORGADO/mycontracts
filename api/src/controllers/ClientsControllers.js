const Clients = require("../models/Clients")
const { v4: uuidv4 } = require("uuid")

const clientsControllers = {
  async index(req, res) {
    const { id } = req.params
    const clientes = await Clients.findByPk(id)

    if (clientes) {
      return res.json(clientes)
    }
    console.log(clientes)
    return res.json({ message: "clientes not found" })
  },

  async show(req, res) {
    const clientes = await Clients.findAll()
    return res.status(200).json(clientes)
  },

  async create(req, res) {
    const { name, email, cpf, rg, naturalidade, sexo, estadoCivil, status } =
      req.body

    const clients_exists = await Clients.findOne({
      where: { cpf },
    })

    if (!clients_exists) {
      const newClients = await Clients.create({
        id: uuidv4(),
        name,
        email,
        cpf,
        rg,
        naturalidade,
        sexo,
        estadoCivil,
        status,
      })
      console.log(newClients)
      return res
        .status(200)
        .json({ message: "newClients created successfully", newClients })
    }

    return res.status(404).json({
      message: "Clients already exists",
    })
  },

  async updated(req, res) {},

  async deleted(req, res) {},
}

module.exports = clientsControllers
