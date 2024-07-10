const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Genre = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Genre;
