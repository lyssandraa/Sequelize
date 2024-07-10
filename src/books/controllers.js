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
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { author: req.body.author } });
    res.status(200).json({ message: "success", book: book });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const dynamicUpdateBook = async (req, res) => {
  try {
    const filterObj = { title: req.body.title };
    const updateObj = { [req.body.updateKey]: req.body.updateValue };

    await Book.update(updateObj, {
      where: filterObj,
    });

    const updatedBook = await Book.findOne({ where: filterObj });

    res.status(200).json({ message: "success", updatedBook: updatedBook });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.destroy({
      where: {
        title: req.body.title,
      },
    });
    res.status(204).json({ message: "success", book: book });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({
      truncate: true,
    });

    res.status(204).send;
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getBook: getBook,
  dynamicUpdateBook: dynamicUpdateBook,
  deleteBook: deleteBook,
  deleteAllBooks: deleteAllBooks,
};
