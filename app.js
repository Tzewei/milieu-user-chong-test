
// requiring express.js and mongoose.js files here.
var express = require('./config/express');
var mongoose = require('./config/mongoose');
mongoose.Promise = global.Promise;

// calling both functions, which comes from the above files.
var db = mongoose();
var app = express();

// set port to 9000.
app.set('port', (process.env.PORT || 9000));

//initialize npm start
app.listen(app.get('port'), function() {
  console.log ('Milieu: user-side running on localhost port: ', app.get('port'));
});

//exporting main app.
module.exports = app;
