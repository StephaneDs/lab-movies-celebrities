// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router()
const celebrityModel = require("./../models/Celebrity.model")

router.post("/celebrities", async (req, res, next) => {
  try {
    const createNewCelebritie = await celebrityModel.create(req.body)
    res.status(201).json(createNewCelebritie)
  } catch (err) {
    console.log(err)
    res.status(400).json("BAD REQUEST")
  }
})

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebritie = await celebrityModel.find()
    res.status(201).json(allCelebritie)
  } catch (err) {
    console.log(err)
    res.status(500).json("INTERNAL SERVER ERROR")
  }
})

module.exports = router
