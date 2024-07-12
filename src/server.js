require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5001;

const Book = require("./books/model");
const Author = require("./authors/model");
const Genre = require("./genres/model");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const genreRouter = require("./genres/routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/genres", genreRouter);

const syncTables = async () => {
  await Book.hasOne(Author);
  await Author.belongsToMany(Book, { through: "bookAuthors" });

  await Book.hasOne(Genre);
  await Genre.belongsToMany(Book, { through: "bookGenres" });

  await Author.hasMany(Book);
  await Book.belongsTo(Author);

  await Genre.hasMany(Book);
  await Book.belongsTo(Genre);

  await Book.sync({ alter: true });
  await Author.sync({ alter: true });
  await Genre.sync({ alter: true });
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port}`);
});
