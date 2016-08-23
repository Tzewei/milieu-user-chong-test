var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  require('../app/models/survey.server.model');
  require('../app/models/user.server.model');
  return db;
};
