const knex = require('knex');
const knexConfig = require('../../knexfile'); // Adjust the path if needed

const db = knex(knexConfig.development);

module.exports = db;
