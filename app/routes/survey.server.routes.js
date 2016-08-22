module.exports = function(app) {

var Survey = require('../models/survey.server.model');
var surveyController = require('../controllers/survey.server.controller');


//actual ROUTING, uses static page controller to render the static pages via specified routes.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/surveys/take', surveyController.new);
app.get('/surveys/index', surveyController.all);
app.get('/surveys/create', surveyController.launch);
app.get('/surveys/edit', surveyController.edit);

app.route('/api/surveys')
  .get(surveyController.index)
  .post(surveyController.create);

app.route('/api/surveys/:id')
  .get(surveyController.show)
  .put(surveyController.update)
  .delete(surveyController.destroy);

};
