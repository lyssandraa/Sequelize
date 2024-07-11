require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const Book = require("./books/model");
const Author = require("./authors/model");
const Genre = require("./genres/model");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const genreRouter = require("./genres/routes");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/genres", genreRouter);

const syncTables = () => {
  Author.hasMany(Book);
  Book.belongsTo(Author);

  Genre.hasMany(Book);
  Book.belongsTo(Genre);

  Book.sync({ alter: true });
  Author.sync({ alter: true });
  Genre.sync({ alter: true });
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port}`);
});
