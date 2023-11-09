const express = require("express")
const cors = require("cors")

const UserController = require("./controllers/UserController")
const ContractsController = require("./controllers/ContractsController")
const clientsControllers = require("./controllers/ClientsControllers")
const CompaniesController = require("./controllers/CompaniesControllers")

const db = require("./config/db")

PORT = 3333

const app = express()
app.use(express.json())

app.get("/accounts", UserController.show)
app.get("/accounts/:id", UserController.index)
app.delete("/accounts/:id", UserController.deleted)
app.post("/accounts", UserController.create)

// Routes is contracts
app.get("/contracts", ContractsController.show)
app.get("/contracts/:id", ContractsController.index)
app.post("/contracts", ContractsController.create)
app.delete("/contracts/:id", ContractsController.deleted)

// Routes is Clients

app.get("/users/:id", clientsControllers.index)
app.get("/users", clientsControllers.show)
app.post("/users", clientsControllers.create)
// Routes is Companies

app.get("/companies", CompaniesController.index)

app.listen(PORT, () => {
  console.log("listening on port", PORT)
})
