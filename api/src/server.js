const express = require("express")
const cors = require("cors")

const UserController = require("./controllers/UserController")

const db = require("./config/db")
const ContractsController = require("./controllers/ContractsController")
PORT = 3333

const app = express()
app.use(express.json())

app.get("/accounts", UserController.show)
app.get("/accounts/:id", UserController.index)
app.delete("/accounts/:id", UserController.deleted)
app.post("/accounts", UserController.create)

// Routes is contracts
app.get("/contracts", ContractsController.show)
app.post("/contracts", ContractsController.create)

app.listen(PORT, () => {
  console.log("listening on port", PORT)
})
