const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getGenreAndBooks } = require("./controllers");

// POST route to add a genre to DB //

genreRouter.post("/", addGenre);

// GET route to get all genres from DB //

genreRouter.get("/getAllGenres", getAllGenres);

// GET route to get genre and its books from DB //

genreRouter.get("/:genreName", getGenreAndBooks);

module.exports = genreRouter;
