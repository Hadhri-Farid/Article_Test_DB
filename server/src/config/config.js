module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'myArticles',
        user: process.env.DB_USER || 'myArticles',
        password: process.env.DB_PASS || 'myArticles',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './myArticles.sqlite'
        }
    }
}
