const database = require('../data/databaseConfiguration');

const fetch = () => {
    return database('cars');
};

const create = (car) => {
    return database('cars').insert(car);
};

module.exports = {
    fetch,
    create
};