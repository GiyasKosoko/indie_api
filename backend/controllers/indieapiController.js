const asyncHandler = require("express-async-handler");

const Show = require("../models/showModel");

//@description: Controller for handling indie API requests.
// @route: GET /api/indieapi
//@access: Private
const getData = asyncHandler(async (req, res) => {
  const shows = await Show.find();

  res.status(200).json(shows);
});

//@description: Controller for handling indie API requests.
// @route: SET /api/indieapi
//@access: Private
const setData = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  res.status(200).json({ message: "Set indie data." });
});

//@description: Controller for handling indie API requests.
// @route: PORT /api/indieapi/:id
//@access: Private
const updateData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update indie data: ${req.params.id}.` });
});

//@description: Controller for handling indie API requests.
// @route: DELETE /api/indieapi/:id
//@access: Private
const deleteData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete indie data: ${req.params.id}.` });
});

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
};
