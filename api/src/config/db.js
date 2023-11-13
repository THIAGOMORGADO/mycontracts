const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("meucontratos", "root", "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to on database...")
  })
  .catch((err) => {
    console.log(err, "Not connected is database connection")
  })

module.exports = sequelize
