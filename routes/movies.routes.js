// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router()
const movieModel = require("./../models/movie.model")
const celebritieModel = require("./../models/Celebrity.model")
console.log(celebritieModel)
router.post("/movies", async (req, res, next) => {
  try {
    const createNewMovie = await movieModel.create(req.body)
    res.status(201).json(createNewMovie)
  } catch (err) {
    console.log(err)
    res.status(400).json("BAD REQUEST")
  }
})

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await movieModel.find()
    res.status(201).json(allMovies)
  } catch (err) {
    console.log(err)
    res.status(500).json("INTERNAL SERVER ERROR")
  }
})

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id
    const oneMovie = await movieModel.findById(req.params.id).populate("cast")
    res.status(201).json(oneMovie)
  } catch (err) {
    console.log(err)
    res.status(500).json("INTERNAL SERVER ERROR")
  }
})

router.delete("/movies/:id", async (req, res, next) => {
  try {
    const deleteMovie = await movieModel.findByIdAndRemove(req.params.id)
    res.json({ message: `you deleted ${deleteMovie}` })
  } catch (err) {
    next(err)
  }
})

router.post("/movies/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id
    const { title, plot, genre, cast } = req.body

    const findMovie = await movieModel.findByIdAndUpdate(
      movieId,
      { title, plot, genre, cast },
      {
        new: true,
      }
    )
    res.status(200).json("sucess")
  } catch (error) {
    next(error)
  }
})

module.exports = router
