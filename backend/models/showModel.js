const mongoose = require("mongoose");

const showSchema = mongoose.Schema(
  {
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
