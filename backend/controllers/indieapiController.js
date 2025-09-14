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
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a title.");
  }

  const show = await Show.create({
    title: req.body.title,
  });

  res.status(200).json(show);
});

//@description: Controller for handling indie API requests.
// @route: PORT /api/indieapi/:id
//@access: Private
const updateData = asyncHandler(async (req, res) => {
  const show = await Show.findById(req.params.id);
  if (!show) {
    res.status(400);
    throw new Error("Show data not found.");
  }

  const updatedShow = await Show.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedShow);
});

//@description: Controller for handling indie API requests.
// @route: DELETE /api/indieapi/:id
//@access: Private
const deleteData = asyncHandler(async (req, res) => {
  const show = await Show.findById(req.params.id);
  if (!show) {
    res.status(400);
    throw new Error("Show data not found.");
  }
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getData,
  setData,
  updateData,
  deleteData,
};
