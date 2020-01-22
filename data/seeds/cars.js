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
				{
					id: 2,
					vin: '12345',
					make: 'honda',
					model: 'accord',
					mileage: 12345
				},
				{
					id: 3,
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				},
				{
					id: 4,
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				}
			]);
    });
};
