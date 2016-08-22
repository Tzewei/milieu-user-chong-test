var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
  _id: String,
  brandName: String,
  brandUsage: Number,
  npsScore: Number,
  npsReason: Number,
  user: [{
    type: String,
    ref: 'User',
    required: true
  }],
  datetaken : { type : Date, default: Date.now }
});


surveySchema.virtual('npsCategory')
.get(function()  {
  if ( this.npsScore <= 6 ) {
    return "Detractors";
  } else if ( this.npsScore > 6 && this.npsScore < 9 )  {
    return "Passive";
  } else if ( this.npsScore > 8 ) {
    return "Promoters";
  }
});

surveySchema.set('timestamps', {});

var Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
