const bcrypt = require("bcrypt")
const User = require("../models/User")
const { v4: uuidv4 } = require("uuid")

const UserControllers = {
  async index(req, res) {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (user) {
      return res.json(user)
    }
    return res.json({ message: "user not found" })
  },

  async show(req, res) {
    const user = await User.findAll()
    return res.status(200).json(user)
  },

  async create(req, res) {
    //precisa de 4 paramentros pra autneticar
    const { name, email, password } = req.body

    const Email_exists = await User.findOne({
      where: { email },
    })

    if (!Email_exists) {
      const passwordHash = await bcrypt.hash(password, 10)
      const user = await User.create({
        id: uuidv4(),
        name,
        email,
        password: passwordHash,
      })
      console.log(user)
      return res
        .status(200)
        .json({ message: "account created successfully", user })
    }

    return res.status(404).json({
      message: "email already exists",
    })
  },

  async deleted(req, res) {
    const { id } = req.params

    const user_exists = await User.findOne({
      where: {
        id: id,
      },
    })
    if (user_exists) {
      await User.destroy({
        where: {
          id: id,
        },
      })
      return res.status(200).json({
        message: "user deleted!",
      })
    } else {
      return res.status(201).json({
        message: "user not found",
      })
    }
  },
}
module.exports = UserControllers
