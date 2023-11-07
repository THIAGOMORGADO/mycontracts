const contracts = require("../models/Contracts")
const { v4: uuidv4 } = require("uuid")

const ContractsController = {
  async index(req, res) {
    const { id } = req.body

    const idExiste = id

    if (idExiste === id) {
      const IDcontracts = await contracts.findByPk(id)
      return res, json(IDcontracts)
    }
  },
  async show(req, res) {
    const findContracts = await contracts.findAll()
    return res.status(200).json(findContracts)
  },
  async create(req, res) {
    const { number_Contracts } = req.body

    const newContracts = await contracts.create({
      id: uuidv4(),
      number_Contracts,
    })
    return res.status(201).json(newContracts)
  },
}

module.exports = ContractsController
