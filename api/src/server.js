const express = require("express")
const cors = require("cors");

const db = require("./config/db")
PORT = 3333

const app = express()

app.get("/contracts", (req, res) => {
  return res.send("Welcome to My Contracts")
})

// Routes is User

app.listen(PORT, () => {
  console.log("listening on port", PORT)
})
