const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.get("/", async (req, res) => {
  res.status(200).json({ message: "test a ok!" });
});

bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);

module.exports = bookRouter;
