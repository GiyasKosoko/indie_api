const mongoose = require("mongoose");

const showSchema = mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please add (a) creator(s)."],
      ref: "Creator",
    },
    title: {
      type: String,
      required: [true, "Please add a title."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Show", showSchema);
