const Author = require("./model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author: author });
  } catch (err) {
    res.status(501).json({ message: err.message, err: err });
  }
};

module.exports = {
  addAuthor: addAuthor,
};
