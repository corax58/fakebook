const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    postedBy: {
      type: String,
    },
    heading: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    likes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
