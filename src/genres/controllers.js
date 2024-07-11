const Genre = require("./model");
const Book = require("../books/model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);

    res.status(201).json({ message: "success", genre: genre });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();

    res.status(200).json({ message: "success", genres: genres });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const getGenreAndBooks = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: { genreName: req.params.genreName },
      include: Book,
    });
    res.status(200).json({ message: "success", genre: genre });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
  getGenreAndBooks: getGenreAndBooks,
};
