'use strict';

require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://admin:password1@ds155252.mlab.com:55252/noteful',
  TEST_MONGODB_URI: process.env.TEST_MONGODB_URI || 'mongodb://admin:password1@ds155252.mlab.com:55252/noteful'
};
