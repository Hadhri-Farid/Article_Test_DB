const ArticlesController = require('./controllers/ArticlesController')

module.exports = (app) => {
    app.post('/createArticle',
    ArticlesController.createArticle)
}
