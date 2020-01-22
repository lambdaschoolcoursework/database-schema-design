const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (request, response) => {
    model.fetchCars()
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error fetching cars'}))
});

module.exports = router;