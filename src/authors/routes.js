const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthor } = require("./controllers");

// POST route to add author to DB //

authorRouter.post("/", addAuthor);

// GET route to get an author by name //

authorRouter.get("/", getAuthor);

module.exports = authorRouter;
