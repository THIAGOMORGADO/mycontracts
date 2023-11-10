const { DataTypes } = require("sequelize")
const db = require("../config/db")
const Clients = require("./Clients")

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

Clients.hasMany(Companies) // Clientes tem muitos Companies
Companies.belongsTo(Clients) // contatrato pertence  a um user


// Companies.sync({ alter: true })

module.exports = Companies
