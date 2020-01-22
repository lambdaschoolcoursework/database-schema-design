const express = require('express');
const model = require('./model');

const router = express.Router();

// fetch all cars
router.get('/', (request, response) => {
    model.fetch()
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error fetching cars'}))
});

// create car
router.post('/', (request, response) => {
    model.create(request.body)
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error creating car'}))
});

module.exports = router;