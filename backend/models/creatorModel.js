const mongoose = require("mongoose");

const creatorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a first name."],
    },
     lastName: {
      type: String,
      required: [true, "Please add a first name."],
    },
     alias: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Creator", creatorSchema);
