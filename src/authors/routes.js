const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  getAllAuhtors,
  getAuthorAndBooks,
  deleteAllAuthors,
} = require("./controllers");

// POST route to add author to DB //

authorRouter.post("/", addAuthor);

// GET route to get all authors in DB //

authorRouter.get("/getAllAuthors", getAllAuhtors);

// GET route to get author and their books //

authorRouter.get("/:authorName", getAuthorAndBooks);

// DEL route to delete all authors from DB //

authorRouter.delete("/", deleteAllAuthors);

module.exports = authorRouter;
