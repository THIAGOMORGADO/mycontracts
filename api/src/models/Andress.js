const { DataTypes } = require("sequelize")
const db = require("../config/db")
const Companies = require("../models/Companies")

const Andress = db.define("andress", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  CEP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  longadouro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

Andress.belongsTo(Companies)

// Andress.sync({ alter: true })

module.exports = Andress
