const Joi = require('joi')

module.exports = {
    // J'ai essayé de ne pas déclarer text et img, je voulais juste une validation sur le title pour ne pas avoir 2 fois le même titre,
    // mais je crois que je suis obligé de déclarer à Joi toute la structure de ma bdd
    createArticle (req, res, next) {
        const schema = {
            title: Joi.string(),
            text: Joi.string(),
            img: Joi.string()
        }
        // req.body.title ne fonctionne pas, je n'ai pas compris comment fonctionne Joi (ou je l'utilise certainement à un endroit ou je peux m'en passer)
        const {error, value} = Joi.validate(req.body, schema)

            if(error) {
                switch (error.details[0].context.key) {
                    case 'title':
                    res.status(400).send({
                    error: 'Ce titre existe déjà'
                    })
                    default:
                        res.status(400).send({
                            error: 'Un probleme est survenu veuillez contacter Mr Toto'
                        })
                }
            } else {
            next()
            }
        }
}