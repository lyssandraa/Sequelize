const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/", addBook);

bookRouter.get("/", getAllBooks);

module.exports = bookRouter;
