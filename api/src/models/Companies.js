const { DataTypes } = require("sequelize")
const db = require("../config/db")

const Companies = db.define("companies", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nome_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CNPJ: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inscricao_estadual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Companies.sync({ alter: true })

module.exports = Companies
