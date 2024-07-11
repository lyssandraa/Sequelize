const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");

// POST route to add author to DB //

authorRouter.post("/", addAuthor);

// GET route to get author and their books //

authorRouter.get("/:authorName", getAuthorAndBooks);

module.exports = authorRouter;
