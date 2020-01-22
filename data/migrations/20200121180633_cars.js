exports.up = (knex, Promise) => {
	return knex.schema.createTable('cars', table => {
		table.increments();
		table.string('vin').notNullable();
		table.string('make').notNullable();
		table.string('model').notNullable();
		table.integer('mileage').notNullable();
		table.string('transmission_type');
		table.string('title_status');
	});
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('cars');
