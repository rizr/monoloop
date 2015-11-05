var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ResultModelSchema = new Schema({});

module.exports = mongoose.model('Result', ResultModelSchema);