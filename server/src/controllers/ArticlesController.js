const {Articles} = require('../models')

module.exports = {
    async createArticle (req, res) {
        try {
            const articles = await Articles.create(req.body)
            res.send(articles.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Un article porte le même nom'
            })
        }
    }
}