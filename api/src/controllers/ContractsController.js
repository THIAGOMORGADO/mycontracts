const contracts = require("../models/Contracts")
const { v4: uuidv4 } = require("uuid")

const ContractsController = {
  async index(req, res) {
    const { id } = req.params
    const number_Contracts = await contracts.findByPk(id)

    if (number_Contracts) {
      return res.json(number_Contracts)
    }
    return res.json({ messager: "Contracts not found.." })
  },
  async show(req, res) {
    const findContracts = await contracts.findAll()
    return res.status(200).json(findContracts)
  },
  async create(req, res) {
    const { number_Contracts, userId } = req.body

    const newContracts = await contracts.findOne({
      where: { number_Contracts },
    })

    if (!newContracts) {
      const newContracts = await contracts.create({
        id: uuidv4(),
        number_Contracts,
        userId, //aqui entramos com o UserId que vem do body
      })
      return res.status(201).json(newContracts)
    }
    return res.status(401).json({
      message: "Contracts is exist...",
    })
  },
  async deleted(req, res) {
    const { id } = req.params
    const constracts = await contracts.findOne({
      where: {
        id: id,
      },
    })
    if (constracts) {
      await contracts.destroy({
        where: {
          id: id,
        },
      })
      return res.status(201).json({ message: "Deleted contract successfully" })
    } else {
      res.status(404).json({ message: "Contracts is not exist.." })
    }
  },
}

module.exports = ContractsController
