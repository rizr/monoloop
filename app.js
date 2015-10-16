var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var cron = require('cron').CronJob;
var mongoose = Promise.promisifyAll(require("mongoose"));
var Schema = mongoose.Schema;
var config = require('./config');

var MongoConnectUri = 'mongodb://' + config.dbConfig.user + ':' + config.dbConfig.pass + '@' + config.dbConfig.uri + ':' + config.dbConfig.port + '/' + config.dbConfig.dbName;
var MonoloopApiUri = 'https://' + config.monoloopConfig.accountId + ':' + config.monoloopConfig.token + '@' + config.monoloopConfig.uri;

mongoose.connect(MongoConnectUri);
mongoose.connection.once('open', function () {
    console.log('Mongo DataBase connected');
});

/*new cron('*//*10 * * * * *', function () {*/
request(MonoloopApiUri + 'profiles/')
    .spread(function (response, body) {
        console.log(body)
    }).catch(function (err) {
        console.error(err);
    });

/*}, null, true);*/


/*
 var Monoloop = mongoose.model('Monoloop', new Schema({}));

 new Monoloop({name: 's', sdsa:333}).save();

 Monoloop.find(function (err, Monoloop) {
 console.log(Monoloop);
 });
 */

