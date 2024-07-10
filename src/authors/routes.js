const { Router } = require("express");
const authorRouter = Router();

const { addAuthor } = require("./controllers");

// POST route to add author to DB //

authorRouter.post("/", addAuthor);

module.exports = authorRouter;
