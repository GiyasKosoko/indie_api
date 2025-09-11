const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get indie data.' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set indie data.' });
});
 
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update indie data: ${req.params.id}.` });
});

router.delete('/:id', (req, res) => {
     res.status(200).json({ message: `Delete indie data: ${req.params.id}.` });
});

module.exports = router;