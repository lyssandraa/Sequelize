require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const Book = require("./books/model");

const bookRouter = require("./books/routes");

const Author = require("./authors/model");

const authorRouter = require("./authors/routes");

const Genre = require("./genres/model");

const genreRouter = require("./genres/routes");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.use("/authors", authorRouter);

app.use("/genres", genreRouter);

const syncTables = async () => {
  Book.hasOne(Author);
  Author.belongsTo(Book);

  Author.hasMany(Book);
  Book.belongsTo(Author);

  Book.sync({ alter: true });
  Author.sync({ alter: true });
  Genre.sync({ alter: true });
};

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port}`);
});
