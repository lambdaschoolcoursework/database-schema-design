exports.seed = knex => {
  	return knex('cars').truncate()
    	.then(() => {
			return knex('cars').insert([
				{
					id: 1,
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				},
			]);
    });
};
