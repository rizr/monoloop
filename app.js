var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var cron = require('cron').CronJob;
var jsforce = require('jsforce');
var mongoose = Promise.promisifyAll(require("mongoose"));
var Models = require('./models');
var MonoloopModel = Models.monoloop;
var SalesForceModel = Models.salesForce;
var ResultModel = Models.result;
var config = require('./config');
var MonoloopApiUri = 'https://' + config.monoloopConfig.accountId + ':' + config.monoloopConfig.token + '@' + config.monoloopConfig.uri;

mongoose.connect(config.dbConfig.uri + ':' + config.dbConfig.port + '/' + config.dbConfig.dbName, {
    user: config.dbConfig.user,
    pass: config.dbConfig.pass
});
mongoose.connection.once('open', function () {
    console.log('Mongo DataBase connected');
});


var conn = new jsforce.Connection();
conn.login('rizr91@gmail.com', 'ecology917ov0ayyVMLwm3LdJoocHvnJHw', function(err, res) {
    if (err) { return console.error(err); }
    conn.identity(function(err, res) {
        if (err) { return console.error(err); }
        console.log("user ID: " + res.user_id);
        console.log("organization ID: " + res.organization_id);
        console.log("username: " + res.username);
        console.log("display name: " + res.display_name);
    });
});


/*new cron('*//*10 * * * * *', function () {*/
/*console.time('ParseMonoloopAPI');
ParseMonoloopAPI(200, 0);*/

/*}, null, true);*/

function ParseMonoloopAPI(limit, offset) {

    request({
        uri: MonoloopApiUri + 'profiles/?limit=' + limit + '&' + 'offset=' + offset,
        json: true
    })
        .spread(function (response, body) {
            if (body.profiles.length) {
                MonoloopModel.create(body.profiles).then(function (error, records) {
                    if (error) console.log(error);
                    ParseMonoloopAPI(limit, offset + limit);
                });
            } else {
                console.log('PARSE FROM MONOLOOP DONE');
                console.timeEnd('ParseMonoloopAPI');
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
