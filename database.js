const env = process.env.NODE_ENV || 'development';
const config = require('./knex.js')[env];
const knex = require('knex')(config);