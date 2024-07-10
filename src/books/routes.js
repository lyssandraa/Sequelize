const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  getBook,
  dynamicUpdateBook,
  deleteBook,
  deleteAllBooks,
} = require("./controllers");

// POST route to add book to DB //

bookRouter.post("/", addBook);

// GET route to read all books in DB //

bookRouter.get("/", getAllBooks);

// GET route to read one book from DB by author //

bookRouter.get("/getBook", getBook);

// PUT route to dynamically update a book from DB //

bookRouter.put("/", dynamicUpdateBook);

// DEL route to delete one book from DB by title //

bookRouter.delete("/", deleteBook);

// DEL route to delete all books from DB //

bookRouter.delete("/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
