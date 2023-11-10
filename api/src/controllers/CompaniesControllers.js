const Companies = require("../models/Companies")

const { v4: uuidv4 } = require("uuid")

const CompaniesControllers = {
  async index(req, res) {
    const { id } = req.params
    const companies = await Companies.findByPk(id)

    if (companies) {
      return res.json(companies)
    }
    return res.json({ message: "user not found" })
  },

  async show(req, res) {
    const newCompanies = await Companies.findAll()
    return res.status(200).json(newCompanies)
  },

  async create(req, res) {
    const { nome_empresa, CNPJ, inscricao_estadual, clientId } = req.body

    const Exist_CNPJ = await Companies.findOne({
      where: { CNPJ },
    })
    if (!Exist_CNPJ) {
      const newCompanies = await Companies.create({
        id: uuidv4(),
        nome_empresa,
        CNPJ,
        inscricao_estadual,
        clientId,
      })
      return res
        .status(201)
        .json({ message: "Company created successfully", newCompanies })
    }
    return res.status(401).json({ message: "Company already exists" })
  },

  async updated(req, res) {},

  async deleted(req, res) {},
}

module.exports = CompaniesControllers
