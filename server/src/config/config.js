module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'my_articles',
        user: process.env.DB_USER || 'my_articles',
        password: process.env.DB_PASS || 'my_articles',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './my_articles.sqlite'
        }
    }
}