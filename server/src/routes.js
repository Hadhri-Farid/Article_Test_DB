const ArticlesController = require('./controllers/ArticlesController')

const ArticlesControllerPolicy = require('./policies/ArticlesControllerPolicy')

module.exports = (app) => {
    app.post('/createArticle',
    ArticlesControllerPolicy.createArticle,
    ArticlesController.createArticle,)
}
