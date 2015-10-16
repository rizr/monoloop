module.exports = {
    monoloopConfig: {
        uri: 'api.monoloop.com/V1/',
        accountId: '1166',
        token: '97c109096d399d7507afdad6aefca829a270b8985e28edf24a9eaadb0a0daa4fa7babb8a7d602e229e1d03f4da38141a80f77f9f9f44be0e1f99733312ebb92e',
    },
    dbConfig: {
        user: process.env.USER || '',
        pass: process.env.PASSWORD || '',
        dbName: process.env.DB || 'monoloop',
        port: process.env.PORT || '27017',
        uri: process.env.URI || '127.0.0.1'
    }
};