exports.seed = knex => {
  	return knex('cars').truncate()
    	.then(() => {
			return knex('cars').insert([
				{
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				},
				{
					vin: '12345',
					make: 'honda',
					model: 'accord',
					mileage: 12345
				},
				{
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				},
				{
					vin: '12345',
					make: 'toyota',
					model: 'corolla',
					mileage: 12345
				}
			]);
    });
};
