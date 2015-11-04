var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SalesForceSchema = new Schema({});

module.exports = mongoose.model('SalesForce', SalesForceSchema);