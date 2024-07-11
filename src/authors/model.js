const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Author",
  {
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = Author;
