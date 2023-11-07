const { DataTypes } = require("sequelize")
const db = require("../config/db")

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

contracts.sync()

module.exports = contracts
