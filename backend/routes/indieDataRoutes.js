const express = require('express');
const router = express.Router();
const {getData, setData, updateData, deleteData} = require('../controllers/indieapiController');

// Routes for indie data
router.route('/').get(getData).post(setData);
router.route('/:id').delete(deleteData).put(updateData);

module.exports = router;