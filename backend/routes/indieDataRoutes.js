const express = require("express");
const router = express.Router();
const {
  getData,
  setData,
  updateData,
  deleteData,
} = require("../controllers/indieDataController");

const { protect } = require("../middleware/authMiddleware");

// Routes for indie data
router.route("/").get(protect, getData).post(protect, setData);
router.route("/:id").delete(protect, deleteData).put(protect, updateData);

module.exports = router;
