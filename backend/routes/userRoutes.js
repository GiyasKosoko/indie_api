const express = require("express");
const router = express.Router();
// const {getData, setData, updateData, deleteData} = require('../controllers/indieapiController');
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// Routes for user authentication

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;

// // Routes for indie data
// router.route('/').get(getData).post(setData);
// router.route('/:id').delete(deleteData).put(updateData);
