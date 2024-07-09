const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const book = await Book.findAll();

    res.status(200).json({ message: "success", books: getAllBooks });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
};
