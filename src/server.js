require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const Author = require("./authors/model");

const authorRouter = require("./authors/routes");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.use("/authors", authorRouter);

const syncTables = () => {
  Book.sync();
  Author.sync();
};

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port}`);
});
