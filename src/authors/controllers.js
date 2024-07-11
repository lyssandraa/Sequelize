const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author: author });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();

    res.status(200).json({ message: "success", authors: authors });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { authorName: req.params.authorName },
      include: Book,
    });
    res.status(200).json({ message: "success", author: author });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

const deleteAllAuthors = async (req, res) => {
  try {
    await Author.destroy({
      truncate: true,
    });

    res.status(204).send;
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

module.exports = {
  addAuthor: addAuthor,
  getAllAuhtors: getAllAuthors,
  getAuthorAndBooks: getAuthorAndBooks,
  deleteAllAuthors: deleteAllAuthors,
};
