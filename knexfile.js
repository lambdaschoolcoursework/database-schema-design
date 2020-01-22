require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
            database: 'cars',
            user: 'postgres',
            password: process.env.PASSWORD
		},
		// or connection: process.env.DB_URL
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		},
	},
};
