var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var salesForceConfig = require('../config').salesForceConfig;

module.exports = {

    login: function () {
        return request({
            uri: "https://auth.exacttargetapis.com/v1/requestToken",
            json: true,
            method: 'POST',
            body: {
                clientId: salesForceConfig.clientId,
                clientSecret: salesForceConfig.clientSecret
            }
        });
    },

    request: function (action, method) {
        this.login().then(request({
            uri: salesForceConfig.uri + action,
            json: true,
            method: method })
        )
    }

};