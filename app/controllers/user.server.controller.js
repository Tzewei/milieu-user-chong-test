var User = require('mongoose').model('User');
var Survey = require('mongoose').model('Survey');
var _ = require('underscore');

var totalCount, promotersCount, detractorsCount;
var mergedRawData = [];
var resultData = [];


Survey.aggregate([
  { $group: {
    _id: "$brandName",
    total: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  totalCount = result;
});

Survey.aggregate([
  { $match: { npsScore: { $gte: 9 }}},
  { $group: {
    _id: "$brandName",
    promoters: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
  promotersCount = result;
});

Survey.aggregate([
  { $match: { npsScore: { $lte: 6 }}},
  { $group: {
    _id: "$brandName",
    detractors: { $sum: 1 }
  }},
  { $sort: { '_id': 1 }}
], function(err, result){
    detractorsCount = result;
});




module.exports = {
  login: function(req, res, next) {
    res.render('users/login', {
      title: 'Log In Page'
    });
  },
  dashboard: function(req, res, next) {

    User.findOne({},function(err,results){
      if(err) console.log(err);
      console.log(results);

      for (var i = 0; i < totalCount.length; i++) {
        mergedRawData.push(_.extend({}, totalCount[i], promotersCount[i], detractorsCount[i] ));
      }

      for(var j = 0; j < totalCount.length; j++)  {
        var brandIndex = mergedRawData[j];

        resultData.push({"Brand": brandIndex._id,
        "NPS_Score": parseInt(brandIndex.promoters/brandIndex.total * 100) - parseInt(brandIndex.detractors/brandIndex.total * 100),
        "totalSurvey": brandIndex.total
       });       
      }
      console.log(resultData);

      res.render('users/dashboard', {
        title: 'Dashboard',
        user:results,
        displayData:resultData

      });
    });

// request.get('localhost:9000/api/surveys/index', function(err, data){
//
// })
// console.log("apiData here: " + surveyController.index(req, req, next));
      //
      // for (var i = 0; i < totalCount.length; i++) {
      //   mergedRawData.push(_.extend({}, totalCount[i], promotersCount[i], detractorsCount[i] ));
      // }
      //
      // for(var j = 0; j < totalCount.length; j++)  {
      //   var brandIndex = mergedRawData[j];
      //
      //   resultData.push({"Brand": brandIndex._id,
      //   "NPS_Score": parseInt(brandIndex.promoters/brandIndex.total * 100) - parseInt(brandIndex.detractors/brandIndex.total * 100),
      //   "totalSurvey": brandIndex.total
      //  });
      // }
console.log(resultData);



      //  res.render('users/dashboard',{
      //    title: 'Dashboard Survey',
      //    displayData:resultData
      //  });


  },

  all: function(req, res, next) {
    res.render('users/index', {
      title: 'All Users'
    });
  },
  edit: function(req, res, next) {
    res.render('users/edit', {
      title: 'Edit Details'
    });
  },
  index: function(req, res, next) {
    User.find({})
    .populate('survey')
    .exec(function(err, users) {
      if (err) res.status(400).send(err);
      res.json(users);
    });
  },
  new: function(req, res) {
    res.render('users/new', {
      title: 'Sign Up'
    });
  },
  create: function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
      if (err) return next(err);
      res.json(user);
    });
  },
  show: function(req, res) {
    res.json(req.user);
  },
  update: function(req, res, next) {
    User.findbyIdAndUpdate(req.user.id, req.body, function(err, user) {
      if (err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
  },
  destroy: function(req, res, next) {
    req.user.remove(function(err) {
      if(err) {
        return next(err);
      } else {
        res.json(req.user);
      }
    });
  },
  user_by_id: function(req, res, next, id) {
    User.findOne({
        _id: id
      }, 'firstname, lastname',
      function(err, user) {
        if (err) {
          return next(err);
        } else {
          req.user = user;
          next();
        }
      });
}
};
