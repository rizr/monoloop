module.exports = {
    salesForceConfig: {
        uri: 'https://www.exacttargetapis.com/hub/v1/',
        clientId: "gawyvo5cwnuef8m91i6584pm",
        clientSecret: "ERyOcVIdCqEbjpY5TUyU9O8M"
    },
    monoloopConfig: {
        uri: 'api.monoloop.com/V1/',
        accountId: '1149',
        token: 'de7be932702870c2ff5bef4c7bc96e001ab4f0bba8dcb1595e9684b01da18c32c658c7d50726efb3f0d35ae6be72cdd1d53e30546fbc40890d08fd8c933484a1',
    },
    dbConfig: {
        user: process.env.DB_USER || null,
        pass: process.env.DB_PASSWORD || null,
        dbName: process.env.DB || 'monoloop',
        port: process.env.DB_PORT || '27017',
        uri: process.env.DB_URI || '127.0.0.1'
    }
};