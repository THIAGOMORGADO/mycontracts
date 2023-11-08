const { DataTypes } = require("sequelize")
const db = require("../config/db")
const user = require('../models/User')

const contracts = db.define("contracts", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  number_Contracts: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

user.hasMany(contracts) // usuario tem muitos contratos 
contracts.belongsTo(user) // contatrato pertence  a um user
//eu fiz isso ^^^^^^
//contracts.sync({alter: true})

module.exports = contracts
