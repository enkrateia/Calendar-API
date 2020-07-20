const dbConfig = require('../config/db.config');
const user = require('./user.model.js');

const db = {
  url: dbConfig.url,
  models: {
    user,
  },
};

module.exports = db;
