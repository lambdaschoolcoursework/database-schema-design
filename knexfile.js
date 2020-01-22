require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
            database: process.env.DATABASE,
            user: process.env.USER,
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
