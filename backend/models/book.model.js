const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: String,
    publicationYear: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
