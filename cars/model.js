const database = require('../data/database');

function fetchCars() {
    return database('cars');
};

module.exports = {
    fetchCars
};