var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ImageSchema = new Schema({
  createdAt : { type: Date, default: Date.now },
  path : { type: String, required: true },
  fileName : { type: String, required: true }
});

module.exports = mongoose.model('Image', ImageSchema);